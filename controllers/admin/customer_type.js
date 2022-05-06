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

