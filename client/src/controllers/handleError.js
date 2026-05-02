import { ShowErrorAlert } from "../views/alert.js";

const handleError = (err) => {
  if (err instanceof TypeError) {
    ShowErrorAlert("Echec de la connexion au serveur !");
  } else {
    ShowErrorAlert("une Erreur s'est produite !");
  }
  console.error("Fetching data error:", err);
};

export { handleError };
