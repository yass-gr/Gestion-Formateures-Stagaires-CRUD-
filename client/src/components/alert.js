const ErrorAlert = (errMsg) => {
  const alertErr = $("<div:>");
  alertErr.html(`
      ${errMsg} <span class="mdi mdi-alert-circle-outline"></span>
    `);
  alertErr.addClass("alertErr");
  return alertErr;
};

const ShowErrorAlert = (errMsg) => {
  const alert = ErrorAlert(errMsg).hide();
  $("body").append(alert);
  alert.animate(
    {
      height: "show",
      opacity: "show",
    },
    200,
  );
  setTimeout(() => {
    alert.animate(
      {
        height: "hide",
        opacity: "hide",
      },
      200,
      () => {
        alert.remove();
      },
    );
  }, 5000);
};

const successAlert = (Msg) => {
  const alert = $("<div:>");
  alert.html(`
      ${Msg} <span class="mdi mdi-check-circle-outline"></span>
    `);
  alert.addClass("alertSucc");
  return alert;
};

const ShowSuccessAlert = (Msg) => {
  const alert = successAlert(Msg).hide();
  $("body").append(alert);
  alert.animate(
    {
      height: "show",
      opacity: "show",
    },
    200,
  );
  setTimeout(() => {
    alert.animate(
      {
        height: "hide",
        opacity: "hide",
      },
      200,
      () => {
        alert.remove();
      },
    );
  }, 5000);
};

export { ShowErrorAlert, ShowSuccessAlert };
