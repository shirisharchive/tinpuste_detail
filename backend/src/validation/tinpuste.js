const Joi = require('joi');

const tinpusteVal = (data) => {
    const nameSchema = Joi.string().trim().min(3).max(50).pattern(/^[a-zA-Z\s]+$/).messages({
        'string.pattern.base': 'Name should only contain letters and spaces',
    });

    const schema = Joi.object({
        name: nameSchema.required(),
        date_of_birth: Joi.date().max('now').required(),
        father_name: nameSchema.required(),
        mother_name: nameSchema.required(),
        grandfather_name: nameSchema.required(),
        grandmother_name: nameSchema.required(),
    });

    return schema.validate(data, { abortEarly: false }); 
};

module.exports.tinpusteVal = tinpusteVal;