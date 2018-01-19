const express = require('express')
const { addVote, queryVote } = require('../services/vote')

const router = express.Router()

router.post('/vote/add', function (req, res) {
  const info = req.body
  addVote(info)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

router.post('/vote/query', function (req, res) {
  queryVote()
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router
