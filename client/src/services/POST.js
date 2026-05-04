const ajouter = async (PORT, PATH, data) => {
  const rs = await fetch(`http://localhost:${PORT}/${PATH}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const d = await rs.json();
  console.log(PATH);
  console.log(d);
  if (!rs.ok) {
    throw new Error(d.error);
  }
  return true;
};

export default ajouter;
