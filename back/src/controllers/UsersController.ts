import { query, Request, Response } from "express";
import { getRepository, Equal, IsNull } from "typeorm";
import * as Yup from "yup";

import Producer from "../models/Producer";
import Schedule from "../models/Schedule";
import Transporter from "../models/Transporter";
import User from "../models/User";

import userView from "../views/user_view";

export default {
  // Lista todos os usuários
  async index(request: Request, response: Response) {
    const producerRepository = getRepository(Producer);
    const transporterRepository = getRepository(Transporter);

    const producer = await producerRepository.find({ relations: ["user"] });
    const transporter = await transporterRepository.find({
      relations: ["user"],
    });

    return response.json({ producer, transporter });
  },

  // Lista todos os produtores
  async listProducer(request: Request, response: Response) {
    const producerRepository = getRepository(Producer);

    const producer = await producerRepository.find({ relations: ["user"] });

    return response.json(producer);
  },

  // Lista todos os transportadores
  async listTransporter(request: Request, response: Response) {
    const transporterRepository = getRepository(Transporter);

    const transporter = await transporterRepository.find({
      relations: ["user"],
    });

    return response.json(transporter);
  },

  // Listar um determinado usuário
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const producerRepository = getRepository(Producer);
    const transporterRepository = getRepository(Transporter);

    const producer = await producerRepository
      .findOneOrFail({
        relations: ["user"],
        where: { user: id },
      })
      .catch((e) => console.error(e));

    const transporter = await transporterRepository
      .findOneOrFail({
        relations: ["user"],
        where: { user: id },
      })
      .catch((e) => console.error(e));

    return response.json(userView.render(producer || transporter));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      cpf,
      genre,
      contact,
      birthday,
    } = request.body;

    const producerInfo = JSON.parse(request.body.producerInfo);
    const transporterInfo = JSON.parse(request.body.transporterInfo);

    const requestImage = request.file;

    const usersRepository = getRepository(User);

    // ----- Preenche os dados do usuário -----
    const user = usersRepository.create({
      name,
      email,
      password,
      cpf,
      genre,
      profile_picture: requestImage.filename,
      contact,
      birthday,
    });

    const userSchema = Yup.object().shape({
      name: Yup.string().required("Nome obrigatório"),
      email: Yup.string().required("Email obrigatório"),
      password: Yup.string().required("Senha obrigatória"),
      cpf: Yup.string().required("CPF obrigatório"),
      genre: Yup.string().required("Gênero obrigatório"),
      profile_picture: Yup.string().required("Foto obrigatória"),
      contact: Yup.string().required("Contato obrigatório"),
      birthday: Yup.string().required("Data de nascimento obrigatória"),
    });

    await userSchema.validate(user, {
      abortEarly: false,
    });

    await usersRepository.save(user);
    // ----- Preenche os dados do usuário -----

    if (producerInfo.amI) {
      /* Checa se o usuário é produtor
      caso for, extraímos as informações
      e deixamos o transportador nulo */

      // ----- Preenche os dados do produtor -----
      const producerRepository = getRepository(Producer);

      const producer = producerRepository.create({
        // --------- Dados do produtor ---------
        grain_type: producerInfo.grain_type,
        // --------- Referência para o usuário ---------
        user,
      });

      const producerSchema = Yup.object().shape({
        grain_type: Yup.string().required("Tipo de grão obrigatório"),
        user: userSchema,
      });

      await producerSchema.validate(producer, {
        abortEarly: false,
      });

      await producerRepository.save(producer);
      // ----- Preenche os dados do produtor -----
    } else if (transporterInfo.amI) {
      /*Caso contrário checa se é transportador
      caso seja, extraímos as informações
      e deixamos o produtor nulo*/

      // ----- Preenche os dados do transportador -----
      const transporterRepository = getRepository(Transporter);

      const transporter = transporterRepository.create({
        // --------- Dados do transportador ---------
        legal_agreements: transporterInfo.legal_agreements,
        cnh: transporterInfo.cnh,
        crlv: transporterInfo.crlv,
        vehicle: transporterInfo.vehicle,
        price: transporterInfo.price,
        assessments: transporterInfo.assessments ?? "",
        // --------- Referência para o usuário ---------
        user,
      });

      const transporterSchema = Yup.object().shape({
        legal_agreements: Yup.string().required("Acordos legais obrigatório"),
        cnh: Yup.string().required("CNH obrigatório"),
        crlv: Yup.string().required("CRLV obrigatório"),
        vehicle: Yup.string().required("Veículo obrigatório"),
        price: Yup.string().required("Preço obrigatório"),
        assessments: Yup.string(),
        user: userSchema,
      });

      await transporterSchema.validate(transporter, {
        abortEarly: false,
      });

      await transporterRepository.save(transporter);
      // ----- Preenche os dados do transportador -----
    }

    return response.status(201).json({
      message: `O ${
        producerInfo.amI ? `produtor` : `transportador`
      } foi salvo com sucesso`,
    });
  },

  async createSchedule(request: Request, response: Response) {
    // Extrai os dados iniciais
    const { producer_id, start, load_location, unload_location } = request.body;

    // Cria o modelo do repositório
    const scheduleRepository = getRepository(Schedule);

    // Preenche o repositório
    const schedule = scheduleRepository.create({
      producer: producer_id,
      start,
      load_location,
      unload_location,
    });

    // Valido
    const scheduleSchema = Yup.object().shape({
      producer: Yup.number().required("ID do produtor obrigatória"),
      start: Yup.string().required("Data de início obrigatória"),
      load_location: Yup.string().required("Local de carregamento obrigatório"),
      unload_location: Yup.string().required(
        "Local de descarregamento obrigatório"
      ),
    });

    scheduleSchema.validate(schedule, {
      abortEarly: false,
    });

    // Salvo
    await scheduleRepository.save(schedule);

    return response.status(201).json(schedule);
  },

  async updateSchedule(request: Request, response: Response) {
    const {
      producer_id,
      transporter_id,
      start,
      load_location,
      unload_location,
    } = request.body;

    const end = request.body.end ?? null;

    const scheduleRepository = getRepository(Schedule);

    const schedule = await scheduleRepository.findOne({
      where: {
        producer: producer_id,
        start: start,
        load_location: load_location,
        unload_location: unload_location,
      },
    });

    console.log(schedule);

    const newSchedule = scheduleRepository.save({
      ...schedule,
      transporter: transporter_id,
      end,
    });

    return response.status(201).json(newSchedule);
  },

  async listSchedule(request: Request, response: Response) {
    const scheduleRepository = getRepository(Schedule);

    const schedule = await scheduleRepository.find({
      where: { transporter: null },
    });

    return response.json(schedule);
  },
};
