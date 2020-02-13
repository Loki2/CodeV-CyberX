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

router.get('/register', (req, res, next) => {
    res.render('register')
})

router.get('/login', (req, res, next) => {
    res.render('login')
})
module.exports = router;