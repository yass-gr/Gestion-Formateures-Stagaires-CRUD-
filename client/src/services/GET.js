const getData = async (PORT, PATH) => {
  const rs = await fetch(`http://localhost:${PORT}/${PATH}`);

  if (!rs.ok) {
    const err = await rs.json();
    throw new Error(err.error);
  }
  const data = await rs.json();

  return data;
};

export default getData;
