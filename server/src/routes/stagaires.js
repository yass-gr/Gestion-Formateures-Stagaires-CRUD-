import express from "express";

import getStagaires from "../controllers/formateurs/stagaires/getStagaires.js";
import addStagaire from "../controllers/formateurs/stagaires/addStagaire.js";
import deleteStagaire from "../controllers/formateurs/stagaires/deleteStagaire.js";
import editStagaire from "../controllers/formateurs/stagaires/editStagaire.js";

const stagairesRouter = express.Router();

stagairesRouter.get("/", getStagaires);

stagairesRouter.post("/", addStagaire);

stagairesRouter.delete("/:id", deleteStagaire);

stagairesRouter.put("/:id", editStagaire);

export default stagairesRouter;
