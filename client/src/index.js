import { display } from "./components/display.js";
import { showSpinner, loader2 } from "./components/spinner.js";
import getData from "./services/getdata.js";
import "./components/searchInput.js";
import { handleError } from "./utils/handleError.js";
import "./components/ajouterBtn.js";
import validerChamps from "./utils/validateData.js";
import { ShowSuccessAlert } from "./components/alert.js";
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

$("#ajoute-form").on("submit", async (e) => {
  e.preventDefault();
  const data = {
    nom: $("#ajoute-form input:nth-child(1)").val(),
    prenom: $("#ajoute-form input:nth-child(3)").val(),
    age: $("#ajoute-form input:nth-child(5)").val(),
    filiere: $("#ajoute-form input:nth-child(7)").val(),
    email: $("#ajoute-form input:nth-child(9)").val(),
  };
  const valider = validerChamps([
    {
      nom: "Nom",
      val: data.nom,
      rules: { max: 30 },
      required: true,
    },
    {
      nom: "Prenom",
      val: data.prenom,
      rules: { max: 30, required: true },
    },
    {
      nom: "Age",
      val: data.age,
      rules: { age: true },
    },
    {
      nom: "Filiere",
      val: data.filiere,
      rules: { max: 50 },
    },
    {
      nom: "Email",
      val: data.email,
      rules: { max: 100 },
    },
  ]);

  if (valider !== true) {
    $(".formErr").remove();
    $("#ajoute-form ").append(`<p class="formErr"> ${valider} </p>`);
    return;
  }
  const PATH = checkIsStagaires() ? "stagaires" : "formateures";
  $("#ajoute-modal > div").html(loader2());
  try {
    const rs = await fetch(`http://localhost:${PORT}/${PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!rs.ok) {
      const d = await rs.json();
      throw new Error(d.error);
    } else {
      const d = await rs.json();
      if (d.added) {
        $("#ajoute-modal").animate(
          {
            height: "hide",
            opacity: "hide",
          },
          100,
          () => {
            $("#ajoute-modal")[0].close();
          },
        );

        $("body").css("overflow", "");
        displayContent();
        ShowSuccessAlert("stagaire ajouté avec success");

        $("#ajoute-form input:nth-child(1)").val("");
        $("#ajoute-form input:nth-child(3)").val("");
        $("#ajoute-form input:nth-child(5)").val("");
        $("#ajoute-form input:nth-child(7)").val("");
        $("#ajoute-form input:nth-child(9)").val("");

        $("#ajoute-modal").html(`<div id="ajoute-modal-div" >
      <button id="ajoute-close">
        <span class="mdi mdi-close"></span>
      </button>
      <form action="" id="ajoute-form">
        <input  type="text" placeholder="Nom" /><br />
        <input  type="text" placeholder="Prenom" /><br />
        <input type="number" placeholder="Age" /><br />
        <input type="text" placeholder="Filiere" /><br />
        <input type="Email" placeholder="Email" /><br />
        <button type="submit">Ajouter</button>
      </form>
      <div/>`);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

// check fonction  exporté pour searchInput.js
const checkIsStagaires = () => isStagaires;
export { checkIsStagaires, PORT };
