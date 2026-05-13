import db from "../../../models/stagaires.js";

export default async function addStagaire(rq, rs) {
  const body = rq.body;
  try {
    await db.addStagaire(body);
    rs.status(200).json({});
  } catch (err) {
    rs.status(500).json({ error: err });
    console.error(err);
  }
}
