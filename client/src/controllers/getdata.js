const getData = async (isStagaires) => {
  const path = isStagaires ? "stagaires" : "formateurs";
  const rs = await fetch(`http://localhost:2002/${path}`);

  if (!rs.ok) {
    const err = await rs.json();
    throw new Error(err.error);
  }
  const data = await rs.json();
  console.log(data);

  return data;
};

export default getData;
