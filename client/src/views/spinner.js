const loader = () => {
  const loaderContainer = $("<div/>");
  loaderContainer.addClass("loaderContainer");
  const loaderDiv = $("<div/>");
  loaderDiv.addClass("loader");
  loaderContainer.append(loaderDiv);
  return loaderContainer;
};

const showSpinner = () => {
  $("tbody").html(loader());
};

export default showSpinner;
