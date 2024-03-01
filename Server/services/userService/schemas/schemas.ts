import joi from "joi";

export const userSchemas: joi.ObjectSchema = joi.object({
    firstName: joi.string().required().min(3).max(30),
    lastName: joi.string().required().min(3).max(30),
    email: joi.string().email().required().email().max(60),
    password: joi.string().required().min(6).max(40),
});
