import express from "express";
import cors from "cors";

import stagairesRouter from "./routes/stagaires.js";
import formateursRouter from "./routes/formateurs.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/stagaires", stagairesRouter);
app.use("/formateurs", formateursRouter);

export default app;
