import express from "express";
import * as mazeBankController from "../controllers/mazeBankController.js"

const router  = express.Router();

router.post("/api/signup", mazeBankController.createUserAndAccount)

export default router;