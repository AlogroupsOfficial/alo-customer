const { pool } = require("../../db/db");

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