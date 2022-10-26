import express from "express";
import hotel from "../models/hotel.js";
// import { useParams } from 'react-router-dom'
const router = express.Router();
import { createerror } from "../utils/error.js";

//create
router.post("/", createhotel);

//update
router.put("/:id", updatehotel);
//
//delete
router.delete("/:id", deletehotel);

//get
router.get("/:id", gethotel);

//getall
router.get("/", getallhotel);

export default router;
