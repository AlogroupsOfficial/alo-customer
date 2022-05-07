const { pool } = require("../../db/db");

exports.customer_types = async(req, res) => {
    let success = {};
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
    let type;
    if (Object.keys(errors).length === 0) {
        if (bodykeys.includes('type')) {
            type = req.body.type;
            if (!type) {
                errors.type = [];
                errors.type.push(`Type is required`);
            }
        } else {
            errors.type = [];
            errors.type.push(`type should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO customer_types (types) VALUES ('${type}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                success.success = [];
                success.success.push(results);
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create customer_type :: ${err}`)
        }
    }
    if (Object.keys(errors).length === 0) {
        res.status(200).json({ status: "SUCCESS", data: success });
    } else {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}
exports.get_customer_types = async(req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM customer_types", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create customer_type :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.nationality = async(req,res)=>{
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
    let type;
    if (Object.keys(errors).length === 0) {
        if (bodykeys.includes('countries')) {
            countries = req.body.countries;
            if (!countries) {
                errors.countries = [];
                errors.countries.push(`Type is required`);
            }
        } else {
            errors.type = [];
            errors.type.push(`type should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO nationality (countries) VALUES ('${countries}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json({message:'Successfully insert data'});
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create nationality :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.get_nationality = async(req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM nationality", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create nationality :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.oldclient = async(req,res)=>{
    let success = {};
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
    let types;
    if(Object.keys(errors).length === 0){
        if(bodykeys.includes('types')){
            types = req.body.types;
            if(!types){
                errors.types = [];
                errors.types.push(`Types is required`)
            }
        }else{
            errors.types = [];
            errors.types.push(`types should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO oldclient (types) VALUES ('${types}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json('Insert data successfully')
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create restricted :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.get_oldclient = async(req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM oldclient", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while get oldclient :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.restricted = async(req,res)=>{
    let success = {};
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
    let types;
    if(Object.keys(errors).length === 0){
        if(bodykeys.includes('types')){
            types = req.body.types;
            if(!types){
                errors.types = [];
                errors.types.push(`Types is required`)
            }
        }else{
            errors.types = [];
            errors.types.push(`types should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO restricted (types) VALUES ('${types}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json('Insert data successfully')
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create restricted :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.get_restricted_types = async(req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM restricted", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create restricted :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.vip = async(req,res)=>{
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
    let types;
    if(Object.keys(errors).length === 0){
        if(bodykeys.includes('types')){
            types = req.body.types;
            if(!types){
                errors.types = [];
                errors.types.push(`Types is required`)
            }
        }else{
            errors.types = [];
            errors.types.push(`types should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO vip (types) VALUES ('${types}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json('Insert data successfully')
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create restricted :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}

exports.get_vip = async(req, res) => {
    let errors = {};
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query("SELECT * FROM vip", (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // rows fetch
                return res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        } catch (err) {
            errors.query = [];
            errors.query.push(`Error while create restricted :: ${err}`)
        }
    }
    if (!(Object.keys(errors).length === 0)) {
        res.status(400).json({ status: "ERROR", errors: errors });
    }
}