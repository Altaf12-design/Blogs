const express=require('express')
const router=express.Router();
const usercontroller=require('../controller/controller')


router.post('/register',usercontroller.register)
router.get('/registerGet',usercontroller.getAll)
module.exports = router