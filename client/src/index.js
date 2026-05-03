import { display } from "./views/display.js";
import showSpinner from "./views/spinner.js";
import getData from "./controllers/getdata.js";
import "./views/searchInput.js";
import { handleError } from "./controllers/handleError.js";
import "./views/ajouterBtn.js";

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
    data = await getData(isStagaires);
  } catch (err) {
    handleError(err);
  }
  display(data, isStagaires);
};

//premier affichage
displayContent();

// check fonction  exporté pour searchInput.js
const checkIsStagaires = () => isStagaires;
export { checkIsStagaires, PORT };
