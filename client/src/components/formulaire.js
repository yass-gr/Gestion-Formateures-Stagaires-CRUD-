const afficherFormulaire = (isStagaires, id = false) => {
  let data = {};
  if (id) {
    const item = $(`.${id}`);
    const nom = item.children(":nth-child(2)").text().split(" ")[0];
    const prenom = item.children(":nth-child(2)").text().split(" ")[1];

    if (isStagaires) {
      data = {
        nom: nom,
        prenom: prenom,
        age: item.children(":nth-child(3)").text(),
        filiere: item.children(":nth-child(4)").text(),
        email: item.children(":nth-child(5)").text(),
      };
    } else {
      data = {
        nom: nom,
        prenom: prenom,
        specialite: item.children(":nth-child(3)").text(),
        email: item.children(":nth-child(4)").text(),
      };
    }
  }

  //contenu de formulaire
  const specificFields = isStagaires
    ? `
   
    <input name="age" type="number" placeholder="Age" value="${parseInt(data.age) || ""}"/><br />
    <input name="filiere" type="text" placeholder="Filiere" value="${data.filiere || ""}" /><br />
    
    `
    : `
    <input name="specialite" type="text" placeholder="Specialite" value="${data.specialite || ""}"  /><br />
        
    `;
  const ajouteModal = $("<dialog/>").attr("id", "ajoute-modal").html(`
     <div id="ajoute-modal-div" >
      <button id="ajoute-close" type="button">
        <span class="mdi mdi-close"></span>
      </button>
      <h2 id="form-title"> ${id ? "Modifier" : "Ajouter"} ${isStagaires ? "stagaire" : "formateur"}
      <form action="" id="${id ? "edit-form" : "ajoute-form"}">
        <input name="nom"  type="text" placeholder="Nom" value="${data.nom || ""}" /><br />
        <input name="prenom" type="text" placeholder="Prenom" value="${data.prenom || ""}"/><br />
        ${specificFields}
        <input name="email" type="Email" placeholder="email" value="${data.email || ""}" /><br />
        <button type="submit">${id ? "Modifier" : "ajouter"}</button>
      </form>
      </div>
    
    `);

  $("body").append(ajouteModal);

  ajouteModal.animate(
    {
      height: "show",
      opacity: "show",
    },
    100,
    () => {
      ajouteModal[0].showModal();
    },
  );
  $("body").css("overflow", "hidden");

  //fermer le formulaire
  ajouteModal.on("click", "#ajoute-close", () => {
    ajouteModal.animate(
      {
        height: "hide",
        opacity: "hide",
      },
      100,
      () => {
        ajouteModal[0].close();
        ajouteModal.remove();
      },
    );

    $("body").css("overflow", "");
  });
};

const fermerForm = () => {
  $("#ajoute-modal").animate(
    {
      height: "hide",
      opacity: "hide",
    },
    100,
    () => {
      $("#ajoute-modal")[0].close();
      $("#ajoute-modal").remove();
    },
  );

  $("body").css("overflow", "");
};

export { afficherFormulaire, fermerForm };
