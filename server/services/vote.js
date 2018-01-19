const moment = require('moment')
const MongoClient = require('mongodb').MongoClient
const { mongodbUrl } = require('../config')

const COLLECTION_NAME = 'votes'

function add(info) {
  console.log('***  add vote  ***')
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongodbUrl, (err, db) => {
      if (err) {
        console.error('MongoDB connect error: ', mongodbUrl)
        reject(err)
      } else {
        // 1. 连接到表
        const collection = db.collection(COLLECTION_NAME)

        // const data = {
        //   time: new Date(),
        //   id: 0,
        // };
        // const finalInfo = infos.map(info => ({ id: info, time: new Date() }))
        const finalInfo = Object.assign(info, { time: new Date() })
        console.log(finalInfo)

        // 2. 插入数据
        collection.insert(finalInfo, (dbErr, result) => {
          if (dbErr) {
            console.error('Error:' + dbErr)
            reject(dbErr)
          } else {
            resolve(result)
          }
        })

        // 3. 释放连接
        db && db.close()
      }
    })
  })
}

function query() {
  console.log('***  query votes  ***')
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongodbUrl, (err, db) => {
      if (err) {
        console.error('MongoDB connect error: ', mongodbUrl)
        reject(err)
      } else {
        // 1. 连接到表
        const collection = db.collection(COLLECTION_NAME)

        // 2. 查询数据
        collection.find().toArray((dbErr, result) => {
          if (dbErr) {
            console.error('Error:' + dbErr)
            reject(dbErr)
          } else {
            console.log(result)
            resolve(result)
          }
        })

        // 3. 释放连接
        db && db.close()
      }
    })
  })
}

module.exports = { addVote: add, queryVote: query }
