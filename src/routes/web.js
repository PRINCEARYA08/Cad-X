// src/routes/web.js
const express = require('express');
const router = express.Router();

const pageCtrl = require('../controllers/pageController');

// Use controller for home route for consistency
router.get('/', pageCtrl.home);

router.get('/about', pageCtrl.about);
router.get('/services', pageCtrl.services);

router.get('/gallery', pageCtrl.gallery);
router.get('/team', pageCtrl.team);
router.get('/portfolio', pageCtrl.portfolio);
router.get('/blog', pageCtrl.blog);
router.get('/contact', pageCtrl.contact);

module.exports = router;