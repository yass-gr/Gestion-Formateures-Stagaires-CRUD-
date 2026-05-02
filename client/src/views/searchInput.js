import checkIsStagaires from "../index.js";
import { searchInputData } from "./display.js";

$("#searchInput").on("input", (e) => {
  let mode = checkIsStagaires() ? "filiere" : "specialite";
  const input = e.target.value.toLowerCase();

  searchInputData.forEach((d) => {
    const isFound =
      d.name.toLowerCase().includes(input) ||
      d[mode].toLowerCase().includes(input) ||
      d.email.toLowerCase().includes(input);

    d.elm.toggleClass("hide", !isFound);
  });
});
