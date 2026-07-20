const Joi = require('joi');

const nameSchema = Joi.string()
    .trim()
    .min(3)
    .max(50)
    .pattern(/^[a-zA-Z\s]+$/)
    .messages({
        'string.pattern.base': 'Name should only contain letters and spaces',
    });

const dateOfBirthSchema = Joi.date().max('now');

const NAME_FIELDS = [
    'name',
    'father_name',
    'mother_name',
    'grandfather_name',
    'grandmother_name',
];

const tinpusteSchema = Joi.object({
    ...NAME_FIELDS.reduce((fields, field) => {
        fields[field] = nameSchema.required();
        return fields;
    }, {}),
    date_of_birth: dateOfBirthSchema.required(),
});

const tinpustePatchSchema = tinpusteSchema
    .fork([...NAME_FIELDS, 'date_of_birth'], (field) => field.optional())
    .min(1)
    .messages({
        'object.min': 'At least one field must be provided for update',
    });

const tinpusteVal = async (data) => {
    return await tinpusteSchema.validate(data, { abortEarly: false });
};

const tinpusteValpatch = async (data) => {
    return await tinpustePatchSchema.validate(data, { abortEarly: false });
};

module.exports = {
    tinpusteVal,
    tinpusteValpatch,
};
