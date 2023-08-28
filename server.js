const express = require('express')
const server = express();
const port = 3000;

const Routes = require('./routes');

server.use(express.json());
server.use('/clients', Routes.ClientRoutes);
server.use('/clients/suma', Routes.ClientRoutes);
server.use('/clients/usuario/:nombre', Routes.ClientRoutes);
server.use('/clients/swapi/:personaje', Routes.ClientRoutes);


server.listen(port, () =>{
    console.log (`API escuchando en puerto ${port}.`);
});