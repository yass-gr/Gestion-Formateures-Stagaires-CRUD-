import db from "../../../models/formateurs.js";

export default async function deleteFormateur(rq, rs) {
  const id = rq.params.id;
  try {
    await db.deleteFormateur(id);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
