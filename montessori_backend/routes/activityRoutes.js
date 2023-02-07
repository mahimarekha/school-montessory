const express = require('express');
const { isAuth, isAdmin } = require('../config/auth');
const router = express.Router();
const {
    addActivity,addAllActivity,getAllActivity,getActivityById,updateActivity,deleteActivity,findActivityList,
    // loginActivity,
} = require('../controller/activityController');

//add a coupon
router.post('/add', addActivity);

//add multiple coupon
router.post('/all',isAuth, addAllActivity);

router.post('/find',isAuth, findActivityList);
//get all coupon
router.get('/list/:schooleId',isAuth, getAllActivity);

//get a coupon
router.get('/:id',isAuth, getActivityById);

//update a coupon

router.put('/:id',isAuth, updateActivity);

//delete a coupon
router.delete('/:id',isAuth, deleteActivity);

// router.post('/login', loginActivity);



module.exports = router;