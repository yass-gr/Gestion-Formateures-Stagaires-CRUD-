import db from "../../../models/formateurs.js";

export default async function addFormateurs(rq, rs) {
  const body = rq.body;
  try {
    await db.addFormateur(body);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
