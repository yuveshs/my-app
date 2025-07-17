import express from 'express';
const router = express.Router();
import { getuser,getoneuser } from "../controllers/logincontroller.js";

router.get("/:id", getuser);
router.post("/", getoneuser);

export default router;