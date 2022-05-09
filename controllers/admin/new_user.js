const { pool } = require("../../db/db");

exports.Assign_role = async (req, res) => {
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
    let role;
    if (Object.keys(errors).length === 0) {
        if (bodykeys.includes('role')) {
            role = req.body.role;
            if (!role) {
                errors.role = [];
                errors.role.push(`role is required`);
            }
        } else {
            errors.role = [];
            errors.role.push(`role should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        try {
            await pool.query(`INSERT INTO assignrole (roles) VALUES ('${type}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    return res.status(200).json(results)
                }
            });

        } catch (err) {
            errors.type = [];
            errors.type.push(`type should be provided in the request body`)
        }
    }
    if (Object.keys(errors).length === 0) {
        res.status(400).json(errors)
    }
}