import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/stagaires", async (rq, rs) => {
  const [data] = await db.query("SELECT * FROM stagaires");
  if (data.length === 0) {
    rs.status(500).send({ error: "db error" });
  } else {
    rs.json(data);
  }
});
app.get("/formateurs", async (rq, rs) => {
  const [data] = await db.query("SELECT * FROM formateurs");
  rs.send(data);
});

export default app;
