const Joi = require("joi");
//for create
function validateChat(data) {
    const schema = Joi.object({
        from: Joi.string().required(),
        to: Joi.string().required(),
        msg: Joi.string().max(50).required()
    });

    return schema.validate(data);
}

//for update
function validateUpdateChat(data) {
    return Joi.object({
        msg: Joi.string().max(50).required()
    }).validate(data);
}

module.exports = { validateChat, validateUpdateChat };