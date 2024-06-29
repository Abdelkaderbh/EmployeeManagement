import express from "express";
import { AddEmployee } from "../controllers/EmployeeController";
import {validateEmployee} from "../validator/EmployeeValidator"

const router = express.Router();


router.post("/",validateEmployee,AddEmployee);


export default router;