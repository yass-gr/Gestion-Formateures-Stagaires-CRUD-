const validerChamps = (data, isStagaires) => {
  let dataWithRules = [
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
    isStagaires && {
      nom: "Age",
      val: data.age,
      rules: { age: true, required: true },
    },

    {
      nom: "Email",
      val: data.email,
      rules: { max: 100, required: true },
    },
    {
      nom: isStagaires ? "Filiere" : "Specialite",
      val: isStagaires ? data.filiere : data.specialite,
      rules: { max: 30, required: true },
    },
  ];

  let errors = [];
  dataWithRules.forEach(({ nom, val, rules }) => {
    if (!nom) return;
    if (rules.max && val.length > rules.max) {
      errors += `${nom} doit contenir max ${rules.max} caracters! <br>`;
    }
    if ((rules.age && parseInt(val) < 18) || parseInt(val) > 30) {
      errors += `${nom} doit etre entre 18 et 30! <br>`;
    }
    if ((rules.required && val.length === 0) || !val) {
      errors += `veuiller remplir le champ ${nom}! <br>`;
    }
  });

  return errors.length === 0 ? true : errors;
};

export default validerChamps;
