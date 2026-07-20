const { tinpusteVal, tinpusteValpatch } = require('../validation/tinpuste');
const serviceToModelInstance = require('../service/servicetomodel');

class TinpusteCTRL {

    // --- Create -------------------------------------------------------

    postData = async (req, res, next) => {
        try {
            const { error, value } = await tinpusteVal(req.body);
            if (error) {
                return res.status(400).json({
                    message: 'Validation failed',
                    details: error.details.map((d) => d.message),
                });
            }

            const result = await serviceToModelInstance.postData(value);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    };

    // --- Delete ---------------------------------------------------------

    deleteData = async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await serviceToModelInstance.deleteData(id);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    };

    // --- Update -----------------------------------------------------------

    updateData = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { error, value } = await tinpusteValpatch(req.body);
            if (error) {
                return res.status(400).json({
                    message: 'Validation failed',
                    details: error.details.map((d) => d.message),
                });
            }

            const result = await serviceToModelInstance.updateData(id, value);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    };

    // --- Read by Name ----------------------------------------------------

    getDataByName = async (req, res, next) => {
        try {
            const { name } = req.params;
            const result = await serviceToModelInstance.getDataByName(name);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    };
}

const tinpusteCTRL = new TinpusteCTRL();
module.exports = tinpusteCTRL;