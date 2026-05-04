import { PORT } from "../index.js";

const getData = async (isStagaires) => {
  const path = isStagaires ? "stagaires" : "formateurs";
  const rs = await fetch(`http://localhost:${PORT}/${path}`);

  if (!rs.ok) {
    const err = await rs.json();
    throw new Error(err.error);
  }
  const data = await rs.json();

  return data;
};

export default getData;
