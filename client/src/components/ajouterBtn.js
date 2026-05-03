const ajouteModal = $("<dialog/>");
ajouteModal.html(`
   
     <div id="ajoute-modal-div" >
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
      <div/>
    
    `);
ajouteModal.attr("id", "ajoute-modal");

$("body").append(ajouteModal);

$(".ajoute-btn").on("click", () => {
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
});
$(document).on("click", "#ajoute-close", () => {
  ajouteModal.animate(
    {
      height: "hide",
      opacity: "hide",
    },
    100,
    () => {
      ajouteModal[0].close();
    },
  );

  $("body").css("overflow", "");
});

export default ajouteModal;
