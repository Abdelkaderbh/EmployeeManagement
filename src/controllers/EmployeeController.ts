import { Request,Response } from "express";
import Employee from "../models/Employee";

//Add Employee
export const AddEmployee = async (req:Request,res:Response) => {
    const {name,email,position,department,salary} = req.body;
    try {
        const employeee = new Employee({name,email,position,department,salary});
           await employeee.save();
        return res.status(201).json(employeee);
    } catch (err) {
        if ((err as any).code === 11000 /* mongodb error code for unique value */ ) {
            return res.status(400).json({error : 'Email Already in Use'});
        }
            return res.status(500).json({err:'Internal Server Error'});
    }
}
