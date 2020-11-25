import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import UsersController from "./controllers/UsersController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", upload.single("profile_picture"), UsersController.create);

routes.get("/producer", UsersController.listProducer);
routes.get("/transporter", UsersController.listTransporter);

routes.post("/schedule", UsersController.createSchedule);
routes.put("/schedule", UsersController.updateSchedule);
routes.get("/schedule", UsersController.listSchedule);

export default routes;
