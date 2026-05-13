import db from "../../../models/formateurs.js";

export default async function editFormateur(rq, rs) {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.editFormateur(data, id);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
