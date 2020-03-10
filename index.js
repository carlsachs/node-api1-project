const express = require("express");
const shortid = require("shortid");

const server = express();

server.get('/api/users', (req, res) => {
    if(!userInfo){
        res.status(500).json({ errorMessage: "There is no user information" })
    }
    else {
        res.status(200).json({ errorMessage: "Success!"})
    }
}) 


const PORT = 5000
server.listen(PORT, () => 
console.log(`\n ** API on http://localhost:${PORT} **\n`));