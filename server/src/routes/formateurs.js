import express from "express";

import getFormateurs from "../controllers/formateurs/formateurs/getFormateurs.js";
import addFormateurs from "../controllers/formateurs/formateurs/addFormateur.js";
import deleteFormateur from "../controllers/formateurs/formateurs/deleteFormateur.js";
import editFormateur from "../controllers/formateurs/formateurs/editFormateur.js";

const formateursRouter = express.Router();

formateursRouter.get("/", getFormateurs);

formateursRouter.post("/", addFormateurs);

formateursRouter.delete("/:id", deleteFormateur);

formateursRouter.put("/:id", editFormateur);

export default formateursRouter;
