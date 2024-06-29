import express from "express";
import { AddEmployee,RemoveEmployee } from "../controllers/EmployeeController";
import {validateEmployee} from "../validator/EmployeeValidator"

const router = express.Router();


router.post("",validateEmployee,AddEmployee);

router.delete("/:id",RemoveEmployee);


export default router;