import Joi from 'joi';

export const emailSchema = Joi.string().email({ tlds: { allow: false } });
export const passwordSchema = Joi.string().min(2).max(100).required();
export const inputValidate = (value, schema) => {
  if (schema?.validate(value)?.error) {
    const [details] = schema.validate(value).error.details;
    return details.message;
  }
  return '';
};
