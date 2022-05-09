const Router = require('express').Router();
const { customer_types, get_customer_types,nationality, get_nationality,oldclient, get_oldclient,restricted, get_restricted_types,vip, get_vip } = require('../controllers/admin/customer_information');
const { Assign_role } = require('../controllers/admin/new_user');
Router.post('/customer_types',customer_types);
Router.get('/customer_types',get_customer_types);
Router.post('/restricted',restricted);
Router.get('/restricted',get_restricted_types);
Router.post('/nationality',nationality);
Router.get('/nationality',get_nationality);
Router.post('/oldclient',oldclient);
Router.get('/oldclient',get_oldclient);
Router.post('/vip',vip);
Router.get('/vip',get_vip);
Router.post('/assign_role',Assign_role)
module.exports = Router;