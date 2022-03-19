const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is my First Node Server")
});

const users = [
    { "id": 0, name: "Sabana", email: "sabana@email.com", phone: "013564879"},
    { "id": 1, name: "Sabnoor", email: "Sabnoor@email.com", phone: "013564879"},
    { "id": 2, name: "Bobita", email: "Bobita@email.com", phone: "013564879"},
    { "id": 3, name: "Purnima", email: "Purnima@email.com", phone: "013564879"},
    { "id": 4, name: "Popi", email: "Popi@email.com", phone: "013564879"},
    { "id": 5, name: "Moushumi", email: "Moushumi@email.com", phone: "013564879"},
    
]
app.get('/users', (req, res) => {
    res.send(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/user', (req, res) => {
    const search = req.query.search;
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('This is fazli mango')
})


app.listen(port, () => {
    console.log("Server listening port is: ", port);
})