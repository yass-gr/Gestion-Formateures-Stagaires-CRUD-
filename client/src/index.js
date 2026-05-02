import { display } from "./views/display.js";
import showSpinner from "./views/spinner.js";
import getData from "./controllers/getdata.js";
import "./views/searchInput.js";
import { handleError } from "./controllers/handleError.js";

let isStagaires = true;

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
export default checkIsStagaires;
