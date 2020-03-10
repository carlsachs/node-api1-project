const express = require("express");
const shortid = require("shortid");

const server = express();

const user = [{
        id: "",
        name: "",
        bio: ""
}]

server.get('/api/users', (req, res) => {
    if(!userInfo){
        res.status(500).json({ errorMessage: "There is no user information" })
    }
    else {
        res.status(200).json({ errorMessage: "Success!"})
    }
}) 

server.post('api/users', (req, res) => {
    const userInfo = req.body
    userInfo.id = shortid.generate();
    const push = () => userInfo.push(userInfo.id, userInfo.name);
    if (!userInfo.name || !userInfo.bio){
        res.status(500).json({ errorMessage: "Error returning data"})
    } else {
        push();
        res.status(201).json(users)
    }
})


const PORT = 5000
server.listen(PORT, () => 
console.log(`\n ** API on http://localhost:${PORT} **\n`));