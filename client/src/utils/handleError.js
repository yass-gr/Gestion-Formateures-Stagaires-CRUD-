import { ShowErrorAlert } from "../components/alert.js";

const handleError = (err) => {
  ShowErrorAlert("une Erreur s'est produite !");
  console.error("unexpected error:", err);
};

export { handleError };
