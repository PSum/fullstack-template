const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


router.get('/', async (req, res) => {
    try {
        res.send("hello pello")

  } catch (err) {
    console.log(err);
    res.status(500).send('There has been an error' + err)
  }
})

module.exports = router;