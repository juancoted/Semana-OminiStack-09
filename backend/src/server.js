const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//fazem o servidor ouvior o websocket
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);



//conexão com o mongoDB
mongoose.connect('mongodb+srv://juancoted:195952@cluster0-k26ii.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//retem a informação dos usuários conectaddos, não é a melhor forma em produção, recomendação do banco reditis
const connectedUsers = {};
io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.io;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    
    return next();//serve para dar continuidade ao fluxo
})
// GET, POST, PUT, DELETE

//req.query = Acessar query params(para filtros)
//req.params = Acessar router params(para edição, delete)
//req.body = Acessar corpo  da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

//porta que a aplicação esta rodando
server.listen(3333);