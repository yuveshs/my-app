import express from 'express';
const router = express.Router();
import { getuser } from "../controllers/logincontroller.js";

router.get("/:id", getuser);

export default router;