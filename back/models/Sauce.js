// Utilisation Mongoose pour modéliser les données de Schema 
const mongoose = require("mongoose");

// Création des clés/valeurs au format attendu par l'aplication front-end
const sauceSchema = mongoose.Schema({
  userId: { type: String, require: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

module.exports = mongoose.model("Sauce", sauceSchema);
