// vérification de la force MDP des utilisateurs

const passwordValidator = require("password-validator");

const PwSchema = new passwordValidator();

PwSchema.is()
  .min(8) // Min de lettres 8
  .is()
  .max(50) // Max de lettres 50
  .has()
  .uppercase(1) // Nombres de Lettre Maj
  .has()
  .lowercase() // Nombres de Lettre Minu
  .has()
  .digits(1) // Nombre de chiffres
  .has()
  .not()
  .spaces() // Pas d'espace
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist des valeurs decrite

module.exports = PwSchema;
