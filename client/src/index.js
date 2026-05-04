import { display } from "./components/display.js";
import { showSpinner, loader2 } from "./components/spinner.js";
import getData from "./services/GET.js";
import "./components/searchInput.js";
import { handleError } from "./utils/handleError.js";
import { afficherFormulaire, fermerForm } from "./components/formulaire.js";
import validerChamps from "./utils/validateData.js";
import recupererInput from "./utils/recupererInput.js";
import ajouter from "./services/POST.js";
import { ShowSuccessAlert } from "./components/alert.js";
import deleteItem from "./services/DELETE.js";
import modifier from "./services/PUT.js";
import Stagaire from "./classes/stagaire.js";
import Formateur from "./classes/formateur.js";

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
});
$("body").on("submit", "#ajoute-form", async (e) => {
  e.preventDefault();

  const data = recupererInput(e.target);
  const errors = validerChamps(data, isStagaires);

  if (errors !== true) {
    $(".formErr").remove();
    $("#ajoute-form").append(`<p class="formErr"> ${errors} </p>`);
    return;
  }

  $("#ajoute-modal > div").html(loader2());
  try {
    const PATH = isStagaires ? "stagaires" : "formateurs";
    const item = isStagaires
      ? new Stagaire(data.nom, data.prenom, data.age, data.filiere, data.email)
      : new Formateur(data.nom, data.prenom, data.specialite, data.email);
    console.log("hi");
    const ajoute = await ajouter(PORT, PATH, item);
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

//supprimer stagaire
$("table").on("click", ".del-item", async (e) => {
  try {
    const PATH = isStagaires ? "stagaires" : "formateurs";
    const id = $(e.target).closest("tr").attr("class");
    const del = await deleteItem(PORT, PATH, id);

    if (del) {
      displayContent();
      ShowSuccessAlert("stagaire supprimé avec success");
    }
  } catch (err) {
    handleError(err);
  }
});

//modifier Stagaire
let idModifier = "";
$("table").on("click", ".edit-btn", (e) => {
  idModifier = $(e.target).closest("tr").attr("class");
  afficherFormulaire(isStagaires, idModifier);
});
$("body").on("submit", "#edit-form", async (e) => {
  e.preventDefault();

  const data = recupererInput(e.target);
  const errors = validerChamps(data, isStagaires);

  if (errors !== true) {
    $(".formErr").remove();
    $("#edit-form").append(`<p class="formErr"> ${errors} </p>`);
    return;
  }

  $("#ajoute-modal > div").html(loader2());
  try {
    const PATH = isStagaires ? "stagaires" : "formateurs";
    const ajoute = await modifier(PORT, PATH, idModifier, data);
    if (ajoute) {
      fermerForm();
      displayContent();
      ShowSuccessAlert("stagaire modifié avec success");
    }
  } catch (err) {
    fermerForm();
    handleError(err);
  }
});

// check fonction  exporté pour searchInput.js
const checkIsStagaires = () => isStagaires;
export { checkIsStagaires };
