import db from "../../../models/stagaires.js";

export default async function deleteStagaire(rq, rs) {
  const id = rq.params.id;
  try {
    await db.deleteStagaire(id);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
