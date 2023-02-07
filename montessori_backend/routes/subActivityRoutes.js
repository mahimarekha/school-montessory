const express = require('express');
const { isAuth, isAdmin } = require('../config/auth');
const router = express.Router();
const {
    addSubActivity,addAllSubActivity,getAllSubActivity,getSubActivityById,updateSubActivity,deleteSubActivity,findSubActivityList,addAllSubActivityByActivityId
    // loginActivity,
} = require('../controller/subActivityController');

//add a coupon
router.post('/add', addSubActivity);
router.put('/:id',isAuth, updateSubActivity);
//add multiple coupon
router.post('/all',isAuth, addAllSubActivity);

router.post('/listbyactivityid',isAuth, addAllSubActivityByActivityId);

router.post('/find',isAuth, findSubActivityList);
//get all coupon
router.get('/list/:schooleId',isAuth, getAllSubActivity);
//get a coupon
router.get('/:id',isAuth, getSubActivityById);
//update a coupon
//delete a coupon
router.delete('/:id',isAuth, deleteSubActivity);

// router.post('/login', loginActivity);

module.exports = router;