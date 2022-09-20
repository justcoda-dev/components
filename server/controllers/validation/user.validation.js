import Joi from "joi";

export const userEmailSchema = Joi.string().email({ tlds: { allow: false } });
export const userPasswordSchema = Joi.string().min(2).max(100).required();
export const userStringSchema = Joi.string().min(4).max(100).required();
