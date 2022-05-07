const { customer_info, get_customer_info, update_customer_info, del_customer_info } = require('../controllers/user/customer_info');

const Router = require('express').Router();

Router.post('/customer_info',customer_info);
Router.get('/customer_info',get_customer_info);
Router.put('/customer_info',update_customer_info);
Router.post('/del_customer_info/:id',del_customer_info);
module.exports = Router;