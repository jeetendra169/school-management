


import express from "express";
import {  loginUser, registerUser,  } from "../controllers/authController.js";

import { isAdmin, isStaff, isStudent, isSuperAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router=express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)


router.get("/staff-auth", requireSignIn,isStaff, (req, res) => {
    res.status(200).send({ ok: true });
  });

  router.get("/student-auth", requireSignIn,isStudent, (req, res) => {
    res.status(200).send({ ok: true });
  });
  //protected Admin route auth
  router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
    //protected Admin route auth
    router.get("/superAdmin-auth", requireSignIn, isSuperAdmin, (req, res) => {
      res.status(200).send({ ok: true });
    });

export default router
