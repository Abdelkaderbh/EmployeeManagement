import mongoose ,{Schema} from "mongoose";


export interface Employee extends Document{
    name:string;
    email:string;
    position:string;
    department:string;
    salary:number;
}

const EmployeeSchema:Schema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    position:{type:String,required:true},
    department:{type:String},
    salary:{type:Number}
})

export default mongoose.model<Employee>('Employees',EmployeeSchema);