// const moment = require('moment')
const _ = require('lodash')
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
        const finalInfo = Object.assign(info, { comment: info.comment && info.comment.trim(), time: new Date() })
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

const DataSource = {
  indoor: [
    { key: 0, value: 'basketball', label: '篮球' },
    { key: 1, value: 'football', label: '足球' },
    { key: 2, value: 'volleyball', label: '排球' },
    { key: 3, value: 'badminton', label: '羽毛球' },
    { key: 4, value: 'table tennis', label: '乒乓球' },
    { key: 5, value: 'billiards', label: '桌球' },
    { key: 6, value: 'swim', label: '游泳' },
    { key: 7, value: 'rock climbing', label: '攀岩' },
    { key: 8, value: 'bowling', label: '保龄球' },
  ],
  esport: [
    { key: 0, value: 'wow', label: 'WOW' },
    { key: 1, value: 'dota', label: 'DOTA' },
    { key: 2, value: 'steam', label: '绝地逃生' },
  ],
  outdoor: [
    { key: 0, value: 'walking', label: '徒步' },
    { key: 1, value: 'cs', label: '真人 CS' },
  ],
  online: [
    { key: 0, value: 'sanguosha', label: '三国杀' },
    { key: 1, value: 'shuishiwodi', label: '谁是卧底' },
  ]
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

            // const esportValues = result.map(value => value.esport)
            // const outdoorValues = result.map(value => value.outdoor)
            // const onlineValues = result.map(value => value.online)

            let counting = {}
            const finalDataSource = {}
            Object.keys(DataSource).forEach(key => {
              counting = _.countBy(result, value => value[key])
              finalDataSource[key] = DataSource[key].map(item => Object.assign(item, { count: counting[item.value] || 0 })).sort((a, b) => b.count - a.count)
            })

            console.log(finalDataSource)
            resolve(finalDataSource)
          }
        })

        // 3. 释放连接
        db && db.close()
      }
    })
  })
}

function queryComments() {
  console.log('***  query vote comments  ***')
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

            const comments = result.filter(item => item.comment).map(item => item.comment)

            console.log(comments)
            resolve(comments)
          }
        })

        // 3. 释放连接
        db && db.close()
      }
    })
  })
}

module.exports = { addVote: add, queryVote: query, queryVoteComments: queryComments }
