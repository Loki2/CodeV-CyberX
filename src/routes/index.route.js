const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) =>{
    res.render('index')
})

router.get('/service', (req, res, next) => {
    res.render('service')
})

router.get('/blogs', (req, res, next) => {
    res.render('blogs')
})

router.get('/contact', (req, res, next) => {
    res.render('contact')
})

router.get('/products', (req, res, next) => {
    res.render('products')
})
module.exports = router;