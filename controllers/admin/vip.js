const { pool } = require("../../db/db");

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