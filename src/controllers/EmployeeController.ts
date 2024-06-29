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

//Remove Employee
export const RemoveEmployee = async (req:Request,res:Response) => {
    const {id} = req.params;
    try {
        const employee = await Employee.findByIdAndDelete(id);
        return employee ? res.status(200).json({deleted:'Employee Deleted '}) : res.status(404).json({error:'Employee Not Found !'})
    } catch (error) {
        return res.status(500).json({error:'Server Error !'})
    }
}

//Update Employee
export const UpdateEmployee = async (req:Request,res:Response) =>{
    try {
        const {id}= req.params;
        const {name,email,position,department,salary} = req.body;
        const UpdateData = {
            name,
            email,
            position,
            department,
            salary
        }
        const employee = await Employee.findByIdAndUpdate(id,UpdateData);
        await employee?.save();
        return employee ? res.status(200).json({message : 'Employee Updated'}) : res.status(404).json({error: 'Employee Not Found !'})
    } catch (error) {
        if ((error as any).code === 11000 /* mongodb error code for unique value */ ) {
            return res.status(400).json({error : 'Email Already in Use'});
        }
            return res.status(500).json({err:'Internal Server Error'});
    }
 }
