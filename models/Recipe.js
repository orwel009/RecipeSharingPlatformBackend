const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required:true },
  ingredients: [{ type: String }],
  instructions: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true }
}, { timestamps:true });

module.exports = mongoose.model('Recipe', RecipeSchema);