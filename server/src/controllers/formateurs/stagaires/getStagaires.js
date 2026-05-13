import db from "../../../models/stagaires.js";

export default async function getStagaires(rq, rs) {
  try {
    const [data] = await db.getStagaires();
    rs.status(200).send(data);
  } catch (err) {
    console.error("Failed to fetch stagaires!:", err);
    rs.status(500).send({ error: err });
  }
}
