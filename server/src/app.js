import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/stagaires", async (rq, rs) => {
  try {
    const [data] = await db.query("SELECT * FROM stagaires");
    rs.status(200).json(data);
  } catch (err) {
    console.error("Failed to fetch stagaires!:", err);
    rs.status(500).send({ error: err });
  }
});
app.get("/formateurs", async (rq, rs) => {
  try {
    const [data] = await db.query("SELECT * FROM formateurs");
    rs.status(200).send(data);
  } catch (err) {
    console.error("Failed to fetch formateures!:", err);
    rs.status(500).send({ error: err });
  }
});

app.post("/stagaires", async (rq, rs) => {
  const body = rq.body;
  try {
    await db.query(
      "INSERT INTO stagaires (nom, prenom, age, filiere, email) VALUES (?,?,?,?,?);",
      [body.nom, body.prenom, body.age, body.filiere, body.email],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

app.post("/formateurs", async (rq, rs) => {
  const body = rq.body;
  try {
    await db.query(
      "INSERT INTO formateurs (nom, prenom, specialite, email) VALUES (?,?,?,?);",
      [body.nom, body.prenom, body.specialite, body.email],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

app.delete("/stagaires/:id", async (rq, rs) => {
  const id = rq.params.id;
  try {
    await db.query(`DELETE FROM stagaires WHERE id =  ${id};`);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});
app.delete("/formeteurs/:id", async (rq, rs) => {
  const id = rq.params.id;
  try {
    await db.query(`DELETE FROM formateurs WHERE id =  ${id};`);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});
app.put("/stagaires/:id", async (rq, rs) => {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.query(
      ` UPDATE stagaires SET nom = ? ,  prenom = ?, age = ?, filiere = ?, email = ? WHERE id =  ${id};`,
      [data.nom, data.prenom, data.age, data.filiere, data.email],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});
app.put("/formateurs/:id", async (rq, rs) => {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.query(
      ` UPDATE formateurs SET nom = ? ,  prenom = ?,  specialite = ?, email = ? WHERE id =  ${id};`,
      [data.nom, data.prenom, data.specialite, data.email],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

export default app;
