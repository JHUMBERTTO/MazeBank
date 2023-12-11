import express from "express";
import * as mazeBankController from "../controllers/mazeBankController.js"

const router  = express.Router();

router.post("/api/signup", mazeBankController.createUserAndAccount)
router.post("/api/login", mazeBankController.loginUser)

export default router;