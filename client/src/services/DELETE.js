const deleteItem = async (PORT, PATH, id) => {
  const rs = await fetch(`http://localhost:${PORT}/${PATH}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!rs.ok) {
    const err = await rs.json();
    throw new Error(err.error);
  }
  const data = await rs.json();

  return data;
};

export default deleteItem;
