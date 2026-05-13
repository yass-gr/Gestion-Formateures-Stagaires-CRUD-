import db from "../../../models/stagaires.js";

export default async function editStagaire(rq, rs) {
  const id = rq.params.id;
  const data = rq.body;
  try {
    await db.editStagaire(data, id);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
