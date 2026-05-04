const recupererInput = (form) => {
  const formD = new FormData(form);
  const data = Object.fromEntries(formD.entries());
  return data;
};

export default recupererInput;
