const validerChamps = (champs) => {
  let errors = [];
  champs.forEach(({ nom, val, rules }) => {
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
