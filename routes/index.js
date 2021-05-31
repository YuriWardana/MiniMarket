const router = require('express').Router()
const express = require('express')
const product = require('./product')

router.get('/',(req,res)=>{
    res.render('home')
})

router.use('/product',product)


module.exports = router
