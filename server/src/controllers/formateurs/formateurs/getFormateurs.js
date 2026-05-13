import db from "../../../models/formateurs.js";

export default async function getFormateurs(rq, rs) {
  try {
    const [data] = await db.getFormateurs();
    rs.status(200).send(data);
  } catch (err) {
    console.error("Failed to fetch formateures!:", err);
    rs.status(500).send({ error: err });
  }
}
