import { display } from "./components/display.js";
import { showSpinner, loader2 } from "./components/spinner.js";
import getData from "./services/GET.js";
import "./components/searchInput.js";
import { handleError } from "./utils/handleError.js";
import { afficherFormulaire, fermerForm } from "./components/ajouterBtn.js";
import validerChamps from "./utils/validateData.js";
import recupererInput from "./utils/recupererInput.js";
import ajouter from "./services/POST.js";
import { ShowSuccessAlert } from "./components/alert.js";
import deleteItem from "./services/DELETE.js";

let isStagaires = true;
const PORT = 3002;

//select stagaires / formateurs buttons events
$("#selectStagaires").on("click", () => {
  isStagaires = true;
  displayContent();
});
$("#selectFormateurs").on("click", () => {
  isStagaires = false;
  displayContent();
});

//afficher page stagaires / formateurs
const displayContent = async () => {
  let data;
  showSpinner();
  try {
    const PATH = isStagaires ? "stagaires" : "formateurs";
    data = await getData(PORT, PATH);
  } catch (err) {
    handleError(err);
  }
  display(data, isStagaires);
};

//premier affichage
displayContent();

//ajouter stagaire/ formateur
$(".ajoute-btn").on("click", () => {
  afficherFormulaire(isStagaires);
  $("#ajoute-form").on("submit", async (e) => {
    e.preventDefault();

    const data = recupererInput(e.target);
    const errors = validerChamps(data, isStagaires);

    if (errors !== true) {
      $("#ajoute-form ").append(`<p class="formErr"> ${errors} </p>`);
      return;
    }

    $("#ajoute-modal > div").html(loader2());
    try {
      const PATH = isStagaires ? "stagaires" : "formateurs";
      const ajoute = await ajouter(PORT, PATH, data);
      if (ajoute) {
        fermerForm();
        displayContent();
        ShowSuccessAlert("stagaire ajouté avec success");
      }
    } catch (err) {
      fermerForm();
      handleError(err);
    }
  });
});

//supprimer stagaire
$("table").on("click", ".del-item", async (e) => {
  try {
    const PATH = isStagaires ? "stagaires" : "formateurs";
    const id = $(e.target).closest("tr").attr("class");
    const del = await deleteItem(PORT, PATH, id);

    if (del) {
      ShowSuccessAlert("stagaire supprimé avec success");
    }
  } catch (err) {
    handleError(err);
  }
  displayContent();
});

// check fonction  exporté pour searchInput.js
const checkIsStagaires = () => isStagaires;
export { checkIsStagaires };
