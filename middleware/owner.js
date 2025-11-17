const Recipe = require('../models/Recipe');

module.exports = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if(!recipe) return res.status(404).json({ msg:'Recipe not found' });
    if(recipe.user.toString() !== req.user.id) return res.status(403).json({ msg:'Not authorized' });
    next();
  } catch(err){
    console.error(err); res.status(500).send('Server error');
  }
};