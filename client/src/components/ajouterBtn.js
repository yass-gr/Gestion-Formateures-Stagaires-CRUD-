const afficherFormulaire = (isStagaires) => {
  //contenu de formulaire
  const specificFields = isStagaires
    ? `
   
    <input name="age" type="number" placeholder="Age" /><br />
    <input name="filiere" type="text" placeholder="Filiere" /><br />
    
    `
    : `
    <input name="specialite" type="text" placeholder="Specialite" /><br />
        
    `;
  const ajouteModal = $("<dialog/>").attr("id", "ajoute-modal").html(`
     <div id="ajoute-modal-div" >
      <button id="ajoute-close" type="button">
        <span class="mdi mdi-close"></span>
      </button>
      <form action="" id="ajoute-form">
        <input name="nom"  type="text" placeholder="Nom" /><br />
        <input name="prenom" type="text" placeholder="Prenom" /><br />
        ${specificFields}
        <input name="email" type="Email" placeholder="email" /><br />
        <button type="submit">Ajouter</button>
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

const fermerFormSuccess = () => {
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
};

export { afficherFormulaire, fermerFormSuccess };
