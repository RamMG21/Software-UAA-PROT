const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("index", {Titulo: "mi titulo dinamico"})
})

router.get('/home', (req, res) => {
  res.send("home", {Titulo: "mi titulo dinamico"})
})

module.exports = router;