const loader = () => {
  const loaderContainer = $("<div/>");
  loaderContainer.addClass("loaderContainer");
  const loaderDiv = $("<div/>");
  loaderDiv.addClass("loader");
  loaderContainer.append(loaderDiv);
  return loaderContainer;
};
const loader2 = () => {
  const loaderDiv = $("<div/>");
  loaderDiv.addClass("loader");

  return loaderDiv;
};

const showSpinner = () => {
  $("tbody").html(loader());
};

export { showSpinner, loader2 };
