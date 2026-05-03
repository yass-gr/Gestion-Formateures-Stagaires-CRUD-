const afficherFormulaire = (isStagaires) => {
  const specificFields = isStagaires
    ? `
   
    <input type="number" placeholder="Age" /><br />
    <input type="text" placeholder="Filiere" /><br />
    
    `
    : `
    <input type="text" placeholder="Specialite" /><br />
        
    `;
  const ajouteModal = $("<dialog/>").attr("id", "ajoute-modal").html(`
     <div id="ajoute-modal-div" >
      <button id="ajoute-close">
        <span class="mdi mdi-close"></span>
      </button>
      <form action="" id="ajoute-form">
        <input  type="text" placeholder="Nom" /><br />
        <input  type="text" placeholder="Prenom" /><br />
        ${specificFields}
        <input type="Email" placeholder="Email" /><br />
        <button type="submit">Ajouter</button>
      </form>
      <div/>
    
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

export default afficherFormulaire;
