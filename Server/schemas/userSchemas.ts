import joi from "joi";

export const userSchemas: joi.ObjectSchema = joi.object({
    firstName: joi.string().required().min(3).max(30),
    lastName: joi.string().required().min(3).max(30),
    email: joi.string().email().required().email().max(60),
    password: joi.string().required().min(6).max(40),
    phone: joi.string().required().length(10),
    address: joi.string().required().min(3).max(60),
    job: joi.string().required().min(3).max(60),
    image: joi.string().required().uri()
});

export const credentialsSchema: joi.ObjectSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
