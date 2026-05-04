const modifier = async (PORT, PATH, id, data) => {
  const rs = await fetch(`http://localhost:${PORT}/${PATH}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const d = await rs.json();

  if (!rs.ok) {
    throw new Error(d.error.code);
  }
  return true;
};

export default modifier;
