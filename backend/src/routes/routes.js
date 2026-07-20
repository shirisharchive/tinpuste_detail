const route=require('express').Router();
const tinpusteCTRL=require('../controller/ctrl');

route.post('/tinpustes', tinpusteCTRL.postData);
route.delete('/tinpustes/:id', tinpusteCTRL.deleteData);
route.put('/tinpustes/:id', tinpusteCTRL.updateData);
route.get('/tinpustes/:name', tinpusteCTRL.getDataByName);

module.exports=route;