const responses = require('../models/responses/index')
const visaService = require('../services/visa.service');

const create = (req, res) => {
    const promise = visaService.create(req.body);
    promise
        .then(responses => {
            const responseObj = new responses.SuccessResponse();
            res.status(200).json(responseObj);
        })
        .catch(error => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = error.stack;
            res.status(500).send(responseObj);
        })
}

module.exports = { create };