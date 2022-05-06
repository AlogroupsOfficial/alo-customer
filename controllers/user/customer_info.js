const { pool } = require("../../db/db");
const { v4: uuidv4 } = require('uuid');
exports.customer_info = async (req, res) => {
    let errors = {};
    let body = req.body;
    let bodykeys = Object.keys(body);
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        }
        catch (err) {
            if (!errors.action) {
                errors.action = [];
            }
            errors.action.push('Unable to parse request body. ' + err.message);
        }
    }
    let customer_id, customer_type, restricted, nationality, old_client, vip, passport_number, cpr, cr,firstname,lastname,phone_number,fax,mobile_number,email,plot_Door_no,street_village_name,city_state_name
    ;
    if (Object.keys(errors).length === 0) {
        if (bodykeys.includes('customer_id')) {
            customer_id = req.body.customer_id;
            if (!customer_id) {
                errors.customer_id = [];
                errors.customer_id.push('customer_id is required')
            }
        } else {
            errors.customer_id = [];
            errors.customer_id.push('customer_id should be provided in the request body')
        }
        if (bodykeys.includes('customer_type')) {
            customer_type = req.body.customer_type;
            if (!customer_type) {
                errors.customer_type = [];
                errors.customer_type.push('customer_type is required')
            }
        } else {
            errors.customer_type = [];
            errors.customer_type.push('customer_type should be provided in the request body')
        }
        if (bodykeys.includes('restricted')) {
            restricted = req.body.restricted;
            if (!restricted) {
                errors.restricted = [];
                errors.restricted.push('restricted is required')
            }
        } else {
            errors.restricted = [];
            errors.restricted.push('restricted should be provided in the request body')
        }
        if (bodykeys.includes('nationality')) {
            nationality = req.body.nationality;
            if (!nationality) {
                errors.nationality = [];
                errors.nationality.push('nationality is required')
            }
        } else {
            errors.nationality = [];
            errors.nationality.push('nationality should be provided in the request body')
        }
        if (bodykeys.includes('old_client')) {
            old_client = req.body.old_client;
            if (!old_client) {
                errors.old_client = [];
                errors.old_client.push('old_client is required')
            }
        } else {
            errors.old_client = [];
            errors.old_client.push('old_client should be provided in the request body')
        }
        if (bodykeys.includes('vip')) {
            vip = req.body.vip;
            if (!vip) {
                errors.vip = [];
                errors.vip.push('vip is required')
            }
        } else {
            errors.vip = [];
            errors.vip.push('vip should be provided in the request body')
        }
        if (bodykeys.includes('passport_number')) {
            passport_number = req.body.passport_number;
            if (!passport_number) {
                errors.passport_number = [];
                errors.passport_number.push('passport_number is required')
            }
        } else {
            errors.passport_number = [];
            errors.passport_number.push('passport_number should be provided in the request body')
        }
        if (bodykeys.includes('cpr')) {
            cpr = req.body.cpr;
            if (!cpr) {
                errors.cpr = [];
                errors.cpr.push('cpr is required')
            }
        } else {
            errors.cpr = [];
            errors.cpr.push('cpr should be provided in the request body')
        }
        if (bodykeys.includes('cr')) {
            cr = req.body.cr;
            if (!cr) {
                errors.cr = [];
                errors.cr.push('cr is required')
            }
        } else {
            errors.cr = [];
            errors.cr.push('cr should be provided in the request body')
        }
        if (bodykeys.includes('firstname')) {
            firstname = req.body.firstname;
            if (!firstname) {
                errors.firstname = [];
                errors.firstname.push('firstname is required')
            }
        } else {
            errors.firstname = [];
            errors.firstname.push('firstname should be provided in the request body')
        }
        if (bodykeys.includes('lastname')) {
            lastname = req.body.lastname;
            if (!lastname) {
                errors.lastname = [];
                errors.lastname.push('lastname is required')
            }
        } else {
            errors.lastname = [];
            errors.lastname.push('lastname should be provided in the request body')
        }
        if (bodykeys.includes('phone_number')) {
            phone_number = req.body.phone_number;
            if (!phone_number) {
                errors.phone_number = [];
                errors.phone_number.push('phone_number is required')
            }
            if(phone_number.length > 13 || phone_number <10){
                errors.phone_number = [];
                errors.phone_number.push('Please enter correct phone number')
            }
        } else {
            errors.phone_number = [];
            errors.phone_number.push('phone_number should be provided in the request body')
        }
        if (bodykeys.includes('fax')) {
            fax = req.body.fax;
            if (!fax) {
                errors.fax = [];
                errors.fax.push('fax is required')
            }
        } else {
            errors.fax = [];
            errors.fax.push('fax should be provided in the request body')
        }
        if (bodykeys.includes('mobile_number')) {
            mobile_number = req.body.mobile_number;
            if (!mobile_number) {
                errors.mobile_number = [];
                errors.mobile_number.push('mobile_number is required')
            }
        } else {
            errors.mobile_number = [];
            errors.mobile_number.push('mobile_number should be provided in the request body')
        }
        if (bodykeys.includes('email')) {
            email = req.body.email;
            if (!email) {
                errors.email = [];
                errors.email.push('email is required')
            }
        } else {
            errors.email = [];
            errors.email.push('email should be provided in the request body')
        }
        if (bodykeys.includes('plot_Door_no')) {
            plot_Door_no = req.body.plot_Door_no;
            if (!plot_Door_no) {
                errors.plot_Door_no = [];
                errors.plot_Door_no.push('plot_Door_no is required')
            }
        } else {
            errors.plot_Door_no = [];
            errors.plot_Door_no.push('plot_Door_no should be provided in the request body')
        }
        if (bodykeys.includes('street_village_name')) {
            street_village_name = req.body.street_village_name;
            if (!street_village_name) {
                errors.street_village_name = [];
                errors.street_village_name.push('street_village_name is required')
            }
        } else {
            errors.street_village_name = [];
            errors.street_village_name.push('street_village_name should be provided in the request body')
        }
        if (bodykeys.includes('city_state_name')) {
            city_state_name = req.body.city_state_name;
            if (!city_state_name) {
                errors.city_state_name = [];
                errors.city_state_name.push('city_state_name is required')
            }
        } else {
            errors.city_state_name = [];
            errors.city_state_name.push('city_state_name should be provided in the request body')
        }
    }
    let id;
    if (Object.keys(errors).length === 0) {
        id = uuidv4()
        try {
            await pool.query(`INSERT INTO customer_info (id,customer_id,customer_type,restricted,nationality,old_client,vip,passport_number,cpr,cr,firstname,lastname,phone_number,fax,mobile_number,email,plot_Door_no,street_village_name,city_state_name) VALUES ('${id}','${customer_id}','${customer_type}','${restricted}','${nationality}','${old_client}','${vip}','${passport_number}','${cpr}','${cr}','${firstname}','${lastname}','${phone_number}','${fax}','${mobile_number}','${email}','${plot_Door_no}','${street_village_name}','${city_state_name}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json({ status: "SUCCESS", message: "successfully create customer_info" })
            });
        } catch {
            errors.query = [];
            errors.query.push(`Error while create customer_info :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors })
    }
}

exports.get_customer_info = async (req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM customer_info", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while geting customer_info :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.update_customer_info = async (req, res) => {
    let errors = {};
    let body = req.body;
    let bodykeys = Object.keys(body);
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        }
        catch (err) {
            if (!errors.action) {
                errors.action = [];
            }
            errors.action.push('Unable to parse request body. ' + err.message);
        }
    }
    let cus_id, customer_id, customer_type, restricted, nationality, old_client, vip, passport_number, cpr, cr,firstname,lastname,phone_number,fax,mobile_number,email,plot_Door_no,street_village_name,city_state_name
    ;
    if (Object.keys(errors).length === 0) {
        if (bodykeys.includes('customer_id')) {
            customer_id = req.body.customer_id;
            if (!customer_id) {
                errors.customer_id = [];
                errors.customer_id.push('customer_id is required')
            }
        } else {
            errors.customer_id = [];
            errors.customer_id.push('customer_id should be provided in the request body')
        }
        if (bodykeys.includes('id')) {
            cus_id = req.body.id;
            if (!cus_id) {
                errors.cus_id = [];
                errors.cus_id.push('id is required')
            }
        } else {
            errors.cus_id = [];
            errors.cus_id.push('id should be provided in the request body')
        }
        if (bodykeys.includes('customer_type')) {
            customer_type = req.body.customer_type;
            if (!customer_type) {
                errors.customer_type = [];
                errors.customer_type.push('customer_type is required')
            }
        } else {
            errors.customer_type = [];
            errors.customer_type.push('customer_type should be provided in the request body')
        }
        if (bodykeys.includes('restricted')) {
            restricted = req.body.restricted;
            if (!restricted) {
                errors.restricted = [];
                errors.restricted.push('restricted is required')
            }
        } else {
            errors.restricted = [];
            errors.restricted.push('restricted should be provided in the request body')
        }
        if (bodykeys.includes('nationality')) {
            nationality = req.body.nationality;
            if (!nationality) {
                errors.nationality = [];
                errors.nationality.push('nationality is required')
            }
        } else {
            errors.nationality = [];
            errors.nationality.push('nationality should be provided in the request body')
        }
        if (bodykeys.includes('old_client')) {
            old_client = req.body.old_client;
            if (!old_client) {
                errors.old_client = [];
                errors.old_client.push('old_client is required')
            }
        } else {
            errors.old_client = [];
            errors.old_client.push('old_client should be provided in the request body')
        }
        if (bodykeys.includes('vip')) {
            vip = req.body.vip;
            if (!vip) {
                errors.vip = [];
                errors.vip.push('vip is required')
            }
        } else {
            errors.vip = [];
            errors.vip.push('vip should be provided in the request body')
        }
        if (bodykeys.includes('passport_number')) {
            passport_number = req.body.passport_number;
            if (!passport_number) {
                errors.passport_number = [];
                errors.passport_number.push('passport_number is required')
            }
        } else {
            errors.passport_number = [];
            errors.passport_number.push('passport_number should be provided in the request body')
        }
        if (bodykeys.includes('cpr')) {
            cpr = req.body.cpr;
            if (!cpr) {
                errors.cpr = [];
                errors.cpr.push('cpr is required')
            }
        } else {
            errors.cpr = [];
            errors.cpr.push('cpr should be provided in the request body')
        }
        if (bodykeys.includes('cr')) {
            cr = req.body.cr;
            if (!cr) {
                errors.cr = [];
                errors.cr.push('cr is required')
            }
        } else {
            errors.cr = [];
            errors.cr.push('cr should be provided in the request body')
        }
        if (bodykeys.includes('firstname')) {
            firstname = req.body.firstname;
            if (!firstname) {
                errors.firstname = [];
                errors.firstname.push('firstname is required')
            }
        } else {
            errors.firstname = [];
            errors.firstname.push('firstname should be provided in the request body')
        }
        if (bodykeys.includes('lastname')) {
            lastname = req.body.lastname;
            if (!lastname) {
                errors.lastname = [];
                errors.lastname.push('lastname is required')
            }
        } else {
            errors.lastname = [];
            errors.lastname.push('lastname should be provided in the request body')
        }
        if (bodykeys.includes('phone_number')) {
            phone_number = req.body.phone_number;
            if (!phone_number) {
                errors.phone_number = [];
                errors.phone_number.push('phone_number is required')
            }
            if(phone_number.length > 13 || phone_number <10){
                errors.phone_number = [];
                errors.phone_number.push('Please enter correct phone number')
            }
        } else {
            errors.phone_number = [];
            errors.phone_number.push('phone_number should be provided in the request body')
        }
        if (bodykeys.includes('fax')) {
            fax = req.body.fax;
            if (!fax) {
                errors.fax = [];
                errors.fax.push('fax is required')
            }
        } else {
            errors.fax = [];
            errors.fax.push('fax should be provided in the request body')
        }
        if (bodykeys.includes('mobile_number')) {
            mobile_number = req.body.mobile_number;
            if (!mobile_number) {
                errors.mobile_number = [];
                errors.mobile_number.push('mobile_number is required')
            }
        } else {
            errors.mobile_number = [];
            errors.mobile_number.push('mobile_number should be provided in the request body')
        }
        if (bodykeys.includes('email')) {
            email = req.body.email;
            if (!email) {
                errors.email = [];
                errors.email.push('email is required')
            }
        } else {
            errors.email = [];
            errors.email.push('email should be provided in the request body')
        }
        if (bodykeys.includes('plot_Door_no')) {
            plot_Door_no = req.body.plot_Door_no;
            if (!plot_Door_no) {
                errors.plot_Door_no = [];
                errors.plot_Door_no.push('plot_Door_no is required')
            }
        } else {
            errors.plot_Door_no = [];
            errors.plot_Door_no.push('plot_Door_no should be provided in the request body')
        }
        if (bodykeys.includes('street_village_name')) {
            street_village_name = req.body.street_village_name;
            if (!street_village_name) {
                errors.street_village_name = [];
                errors.street_village_name.push('street_village_name is required')
            }
        } else {
            errors.street_village_name = [];
            errors.street_village_name.push('street_village_name should be provided in the request body')
        }
        if (bodykeys.includes('city_state_name')) {
            city_state_name = req.body.city_state_name;
            if (!city_state_name) {
                errors.city_state_name = [];
                errors.city_state_name.push('city_state_name is required')
            }
        } else {
            errors.city_state_name = [];
            errors.city_state_name.push('city_state_name should be provided in the request body')
        }
    }
    let id;
    if (Object.keys(errors).length === 0) {
        id = uuidv4()
        try {

            await pool.query(`UPDATE customer_info
            SET customer_id = '${customer_id}', customer_type = '${customer_type}',restricted = '${restricted}', nationality = '${nationality}', old_client='${old_client}', vip='${vip}', passport_number='${passport_number}', cpr='${cpr}', cr='${cr}',firstname='${firstname}',lastname='${lastname}',phone_number='${phone_number}',fax='${fax}',mobile_number='${mobile_number}',email='${email}',plot_Door_no='${plot_Door_no}',street_village_name='${street_village_name}',city_state_name='${city_state_name}'
            WHERE id='${cus_id}';`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json({ status: "SUCCESS", message: "successfully create customer_info" })
            });
        } catch {
            errors.query = [];
            errors.query.push(`Error while create customer_info :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors })
    }
}