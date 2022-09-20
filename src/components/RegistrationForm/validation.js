import Joi from 'joi';

export const emailSchema = Joi.string().email({ tlds: { allow: false } });
export const passwordSchema = Joi.string().min(2).max(100).required();
export const stringSchema = Joi.string().min(4).max(100).required();
