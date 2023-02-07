const express = require('express');
const { isAuth, isAdmin } = require('../config/auth');
const router = express.Router();
const {
    addActivityTabel,addAllActivityTabel,getAllActivityTabel,getActivityTabelById,updateActivityTabel,deleteActivityTabel,findActivityTabelList,
    // loginActivity,
} = require('../controller/activityTabelController');

//add a coupon
router.post('/add', addActivityTabel);
router.put('/:id',isAuth, updateActivityTabel);
//add multiple coupon
router.post('/all',isAuth, addAllActivityTabel);

router.post('/find',isAuth, findActivityTabelList);
//get all coupon
router.get('/list/:schooleId',isAuth, getAllActivityTabel);
//get a coupon
router.get('/:id',isAuth, getActivityTabelById);
//update a coupon


//delete a coupon
router.delete('/:id',isAuth, deleteActivityTabel);

// router.post('/login', loginActivity);

module.exports = router;