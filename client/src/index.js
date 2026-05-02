import { updateDisplayStag, updateDisplayFrm } from "./headerBtnsDisplay.js";

let isStagaires = true;

//select stagaires / formateurs buttons events
$("#selectStagaires").on("click", () => {
  updateDisplayStag();
  isStagaires = true;
});
$("#selectFormateurs").on("click", () => {
  updateDisplayFrm();
  isStagaires = false;
});
