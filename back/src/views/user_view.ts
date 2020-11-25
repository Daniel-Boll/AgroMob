import User from "../models/User";

interface ComplexUser {
  id: number;

  // --- do produtor ---
  grain_type?: string;
  // --- do produtor ---

  // --- do transportador ---
  legal_agreements?: string;
  cnh?: string;
  crlv?: string;
  vehicle?: string;
  price?: string;
  // --- do transportador ---

  user: User;
}

// Fazer conforme a necessidade
export default {
  render(complexUser: any) {
    return {
      id: complexUser.id,
      name: complexUser.user.name,
      email: complexUser.user.email,
      password: complexUser.user.password,
      cpf: complexUser.user.cpf,
      genre: complexUser.user.genre,
      profile_picture: `http://localhost:3333/uploads/${complexUser.user.profile_picture}`,
      contact: complexUser.user.contact,
      birthday: complexUser.user.birthday,
      grain_type: complexUser.grain_type ?? "",
      legal_agreements: complexUser.legal_agreements ?? "",
      cnh: complexUser.cnh ?? "",
      crlv: complexUser.crlv ?? "",
      vehicle: complexUser.vehicle ?? "",
      price: complexUser.price ?? "",
    };
  },
};
