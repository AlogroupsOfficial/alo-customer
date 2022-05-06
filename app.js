const express = require('express');
const app = express();
const cors = require('cors');
const {readdirSync} = require('fs');
const morgan = require('morgan');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
readdirSync('./route').map((r)=>{app.use(require(`./route/${r}`))})
app.listen(8080,()=>{
    console.log(`Server is runing on http://localhost:8080`)
})

