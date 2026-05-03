import { ShowErrorAlert } from "../views/alert.js";

const handleError = (err) => {
  ShowErrorAlert("une Erreur s'est produite !");
  console.error("Fetching data error:", err);
};

export { handleError };
