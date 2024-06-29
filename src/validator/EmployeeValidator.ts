import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const employeeSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  position: Joi.string().required(),
  department: Joi.string(),
  salary: Joi.number(),
});

export const validateEmployee = (req: Request, res: Response, next: NextFunction) => {
  const { error } = employeeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
