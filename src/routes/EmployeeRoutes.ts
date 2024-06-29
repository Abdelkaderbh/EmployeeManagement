import express from "express";
import { AddEmployee,RemoveEmployee,UpdateEmployee } from "../controllers/EmployeeController";
import {validateEmployee} from "../validator/EmployeeValidator"

const router = express.Router();


router.post("",validateEmployee,AddEmployee);

router.delete("/:id",RemoveEmployee);

router .put("/:id",validateEmployee,UpdateEmployee);


export default router;