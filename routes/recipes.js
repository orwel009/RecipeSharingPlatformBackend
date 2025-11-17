const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Recipe = require('../models/Recipe');

router.post('/', auth, async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const recipe = new Recipe({
      title,
      ingredients: Array.isArray(ingredients) ? ingredients : (ingredients||"").split(',').map(s=>s.trim()),
      instructions,
      user: req.user.id
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch(err){ console.error(err); res.status(500).send('Server error'); }
});

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('user', 'name email').sort({ createdAt:-1 });
    res.json(recipes);
  } catch(err){ console.error(err); res.status(500).send('Server error'); }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('user', 'name email');
    if(!recipe) return res.status(404).json({ msg:'Recipe not found' });
    res.json(recipe);
  } catch(err){ console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
