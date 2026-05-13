import db from "./db.js";

class StagairesTable {
  async getStagaires() {
    return await db.query("SELECT * FROM stagaires");
  }

  async addStagaire(stagaire) {
    await db.query(
      "INSERT INTO stagaires (nom, prenom, age, filiere, email) VALUES (?,?,?,?,?);",
      [stagaire.nom, stagaire.prenom, stagaire.age, stagaire.filiere, stagaire.email],
    );
  }

  async editStagaire(stagaire, id) {
    await db.query(
      ` UPDATE stagaires SET nom = ? ,  prenom = ?, age = ?, filiere = ?, email = ? WHERE id =  ?;`,
      [
        stagaire.nom,
        stagaire.prenom,
        stagaire.age,
        stagaire.filiere,
        stagaire.email,
        id,
      ],
    );
  }

  async deleteStagaire(id) {
    await db.query(`DELETE FROM stagaires WHERE id = ?;`, [id]);
  }
}

export default new StagairesTable();
