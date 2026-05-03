import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/stagaires", async (rq, rs) => {
  try {
    const [data] = await db.query("SELECT * FROM stagaires");
    rs.json(data);
  } catch (err) {
    console.error("Failed to fetch stagaires!:", err);
    rs.status(500).send({ error: "Internal server Error" });
  }
});
app.get("/formateurs", async (rq, rs) => {
  const [data] = await db.query("SELECT * FROM formateurs");
  rs.send(data);
});

export default app;
