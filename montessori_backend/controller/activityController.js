const Activity = require('../models/Activity');
const bcrypt = require('bcryptjs');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const { signInToken, tokenForVerify, sendEmail } = require('../config/auth');
dayjs.extend(utc);
const addActivity = async (req, res) => {
    try {
      const newActivity = new Activity(req.body);
      await newActivity.save();
      res.status(200).send({
        message: 'Activity Added Successfully!',
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
//   const loginActivity = async (req, res) => {
//     try {
//       const activity = await Activity.findOne({ mobileNumber: req.body.mobileNumber });
//       if (teacher && bcrypt.compareSync(req.body.password, teacher.password)) {
//         const token = signInToken(teacher);
//         res.send({
//           token,
//           _id: teacher._id,
//           name: teacher.orgName,
//           phone: teacher.mobileNumber,
//           email:teacher.email,
//         });
//       } else {
//         res.status(401).send({
//           message: 'Invalid Email or password!',
//         });
//       }
//     } catch (err) {
//       res.status(500).send({
//         message: err.message,
//       });
//     }
//   };
  const addAllActivity = async (req, res) => {
    try {
      await Activity.insertMany(req.body);
      res.status(200).send({
        message: 'Activity Added successfully!',
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
  const getAllActivity = async (req, res) => {
    try {
      let preparePost ={};
      if(req.params.schooleId){
        preparePost = {"schooleId" : ObjectId(req.params.schooleId)};
      }
      const activity = await Activity.find(preparePost).populate("schooleId")
      .populate("classId").populate("studentId").populate("activityId").populate("subActivityId");
      res.send(activity);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
const findActivityList=async(req, res)=>{
  let preparePost ={};
  if(req.body.schooleId){
    preparePost = {"schooleId" : ObjectId(req.body.schooleId)};
  }
  if(req.body.classId){
    preparePost = {...preparePost,...{"classId" : ObjectId(req.body.classId)}};
  }
  if(req.body.studentId){
    preparePost = {...preparePost,...{"studentId" : ObjectId(req.body.studentId)}};
  }
  if(req.body.key){
    preparePost = {...preparePost,...{"key" : (req.body.key)}};
  }
  try {
    const activity = await Activity.find(preparePost).populate("schooleId").populate("classId").populate("studentId").populate("activityId").populate("subActivityId");
    res.send(activity);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}
  const getActivityById = async (req, res) => {
    try {
      const activity = await Activity.findById(req.params.id);
      res.send(activity);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };  
  const updateActivity = async (req, res) => {
    try {
      const activity = await Activity.findById(req.params.id);
      console.log(activity)
      if (activity) {
        activity.schooleId = req.body.schooleId;
        activity.classId = req.body.classId;
        activity.academicYear = req.body.academicYear;
        activity.studentName = req.body.studentName;
        activity.activityName = req.body.activityName;
        activity.subActivityName=req.body.subActivityName;
        activity.remarks=req.body.remarks;
        activity.key=req.body.key;
        activity.authorizedPerson=req.body.authorizedPerson;
        await activity.save();
        res.send({ message: 'Activity Updated Successfully!' });
      }
    } catch (err) {
      res.status(404).send({ message: err });
    }
  };
  const deleteActivity = (req, res) => {
    Activity.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: 'Activity Deleted Successfully!',
        });
      }
    });
  };
  module.exports = {
    addActivity,
     addAllActivity,
    getAllActivity,
   getActivityById,
    updateActivity,
    deleteActivity,
    findActivityList,
    // loginActivity,
    
  };