import express from 'express';
const router = express.Router();
import { adduser, deleteuser, updateuser,getalluser } from '../controllers/registercontroller.js';

router.get("/", getalluser);
router.post("/",adduser);
router.put("/:id",updateuser);
router.delete("/:id",deleteuser);


export default router;