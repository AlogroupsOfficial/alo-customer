const { pool } = require("../../db/db");

exports.Assign_role = async (req, res) => {
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
        try{
            await pool.query(`INSERT INTO assignrole (types) VALUES ('${type}');`, function (error, results, fields) {
                if (error) {
                    console.log(error);
                }
                res.status(200).json(JSON.parse(JSON.stringify(data)));
            });
        }catch(err){

        }
    }
}