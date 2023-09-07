const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/exp', (req, res) => {
    res.render('expirences', {
        aofservers: 3,
    });
});

router.get('/abtme', (req, res) => {
    res.render('aboutme');
});
router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;