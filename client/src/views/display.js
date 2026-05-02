import {
  updateDisplayChangeFrm,
  updateDisplayChangeStag,
} from "./headerBtnsDisplay.js";

let searchInputData = [];

const afficherTableStagaires = (data) => {
  //modifier title & ajouter btn
  $(".title").html("Stagaires");
  $(".ajoute-btn").html(
    'Ajouter stagaire <span class="mdi mdi-account-plus-outline"></span>',
  );
  // modifier tableau
  const thead = $("thead");
  thead.html(`
              <th>#</th>
              <th>Nom Complet</th>
              <th>Age</th>
              <th>Filiere</th>
              <th>Email</th>
              <th>Date d'ajoute</th>
              <th>Actions</th>

              `);
  const tbody = $("tbody");
  tbody.html("");
  searchInputData.length = 0;
  data.forEach((s) => {
    const tr = $("<tr/>");
    tr.html(`
    <td> ${s.id}  </td>
    <td>${s.nom}  ${s.prenom} </td>
    <td> ${s.age} </td>
    <td> ${s.filiere} </td>
    <td> ${s.email} </td>
     <td> ${dayjs(s.date_ajoute).format("DD/MM/YY, HH:mm")} </td>
    <td class="actions"> <button><span  class=" mdi mdi-pencil-outline"></span> </button><button><span class="mdi mdi-trash-can-outline"></span> </button> </td>
    `);

    tbody.append(tr);

    //ajouter data pour search input traitement
    searchInputData.push({
      name: `${s.nom} ${s.prenom}`,
      filiere: `${s.filiere}`,
      email: `${s.email}`,
      elm: tr,
    });
  });
};
const afficherTableFormateurs = (data) => {
  //modifier title & ajouter btn
  $(".title").html("Formateurs");
  $(".ajoute-btn").html(
    'Ajouter formateur <span class="mdi mdi-account-plus-outline"></span>',
  );
  // modifier tableau
  const thead = $("thead");
  thead.html(`
              <th>#</th>
              <th>Nom Complet</th>
              <th>Specialite</th>
              <th>Email</th>
              <th>Date d'ajoute</th>
              <th>Actions</th>
              
              `);
  const tbody = $("tbody");
  tbody.html("");
  searchInputData.length = 0;
  data.forEach((s) => {
    const tr = $("<tr/>");
    tr.html(`
    <td> ${s.id}  </td>
    <td>${s.nom}  ${s.prenom} </td>
    <td> ${s.specialite} </td>
    <td> ${s.email} </td>
     <td> ${dayjs(s.date_ajoute).format("DD/MM/YY, HH:mm")} </td>
    <td class="actions"> <button><span  class=" mdi mdi-pencil-outline"></span> </button><button><span class="mdi mdi-trash-can-outline"></span> </button> </td>
    `);

    tbody.append(tr);

    //ajouter data pour search input traitement
    searchInputData.push({
      name: `${s.nom} ${s.prenom}`,
      specialite: `${s.specialite}`,
      email: `${s.email}`,
      elm: tr,
    });
  });
};

//fonction principal d'affichage
const display = (data, isStagaires) => {
  if (data) {
    if (isStagaires) {
      updateDisplayChangeStag();
      afficherTableStagaires(data);
    } else {
      updateDisplayChangeFrm();
      afficherTableFormateurs(data);
    }
  }
};

export { display, searchInputData };
