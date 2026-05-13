import db from "./db.js";

class FormateursTable {
  async getFormateurs() {
    return await db.query("SELECT * FROM formateurs");
  }

  async editFormateur(formateur, id) {
    await db.query(
      ` UPDATE formateurs SET nom = ? ,  prenom = ?,  specialite = ?, email = ? WHERE id =  ?;`,
      [
        formateur.nom,
        formateur.prenom,
        formateur.specialite,
        formateur.email,
        id,
      ],
    );
  }

  async deleteFormateur(id) {
    await db.query(`DELETE FROM formateurs WHERE id = ?;`, [id]);
  }

  async addFormateur(formateur) {
    await db.query(
      "INSERT INTO formateurs (nom, prenom, specialite, email) VALUES (?,?,?,?);",
      [formateur.nom, formateur.prenom, formateur.specialite, formateur.email],
    );
  }
}

export default new FormateursTable();
