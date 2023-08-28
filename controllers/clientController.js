
const express = require('express');
const axios = require('axios');
const app = express(); 

const getClients = (req, res) =>  {
        const responseJson = { mensaje: 'hola mundo pruebas' };
        res.status(200).json(responseJson);
};
const getClient = (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const resultado = num1 + num2;
    
    const responseJson = { resultado };
    res.status(200).json(responseJson);
};

const getNombre = (req, res) => {
    const nombre = req.query.nombre;
    const responseJson = { usuario:nombre };
    res.status(200).json(responseJson);
};

const getSwapi=('/api/swapi/:personaje', async (req, res) => {
    const personajeId = req.params.personaje;
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${personajeId}/`);
      const personaje = response.data;
      res.status(200).json({ personaje });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener el personaje' });
    }
  });

module.exports = {
    getClients,
    getClient,
    getNombre,
    getSwapi
    
    
};