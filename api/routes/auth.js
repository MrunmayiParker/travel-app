import express from "express";
import { register } from "../controller/authctrl.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);



export default router