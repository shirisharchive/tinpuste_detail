const Tinpuste = require("../model/schema");

class serviceToModel {
    postData = async (data) => {
        return await Tinpuste.create(data);
    }

    deleteData = async (id) => {
        const record = await Tinpuste.findByPk(id);
        if (!record) return null;

        await record.destroy();
        return record;
    }

    updateData = async (id, data) => {
        const record = await Tinpuste.findByPk(id);
        if (!record) return null;

        return await record.update(data);
    }

    getDataByName = async (id) => {
        return await Tinpuste.findByPk(id);
    }
}
const serviceToModelInstance = new serviceToModel();
module.exports = serviceToModelInstance;
