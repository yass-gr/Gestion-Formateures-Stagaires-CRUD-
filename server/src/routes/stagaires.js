import express from "express";
import db from "../config/db.js";

const stagairesRouter = express.Router();

stagairesRouter.get("/stagaires", async (rq, rs) => {
  try {
    const [data] = await db.query("SELECT * FROM stagaires");
    rs.status(200).json(data);
  } catch (err) {
    console.error("Failed to fetch stagaires!:", err);
    rs.status(500).send({ error: err });
  }
});

stagairesRouter.post("/stagaires", async (rq, rs) => {
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

stagairesRouter.delete("/stagaires/:id", async (rq, rs) => {
  const id = rq.params.id;
  try {
    await db.query(`DELETE FROM stagaires WHERE id =  ${id};`);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

stagairesRouter.put("/stagaires/:id", async (rq, rs) => {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.query(
      ` UPDATE stagaires SET nom = ? ,  prenom = ?, age = ?, filiere = ?, email = ? WHERE id =  ?;`,
      [data.nom, data.prenom, data.age, data.filiere, data.email, id],
    );
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
});

export default stagairesRouter;
