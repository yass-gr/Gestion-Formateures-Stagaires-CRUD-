import express from "express";
import db from "../config/db.js";

const formateursRouter = express.Router();

formateursRouter.get("/formateurs", async (rq, rs) => {
  try {
    const [data] = await db.query("SELECT * FROM formateurs");
    rs.status(200).send(data);
  } catch (err) {
    console.error("Failed to fetch formateures!:", err);
    rs.status(500).send({ error: err });
  }
});

formateursRouter.post("/formateurs", async (rq, rs) => {
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

formateursRouter.delete("/formateurs/:id", async (rq, rs) => {
  const id = rq.params.id;
  try {
    await db.query(`DELETE FROM formateurs WHERE id =  ${id};`);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

formateursRouter.put("/formateurs/:id", async (rq, rs) => {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.query(
      ` UPDATE formateurs SET nom = ? ,  prenom = ?,  specialite = ?, email = ? WHERE id =  ?;`,
      [data.nom, data.prenom, data.specialite, data.email, id],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

export default formateursRouter;
