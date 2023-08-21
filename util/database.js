import { MongoClient } from 'mongodb'

// db 접속 url
const url = 'mongodb+srv://admin:MzAMInLGwFE2fwYl@seongho.tcxykmc.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

// next.js는 파일을 저장할 때마다 자바스크립트 파일들이 재실행됨.
// MongoClient.connect가 동시에 여러개 실행될 수 있음.
// 개발중 상태면 global이라는 전역변수 저장소에 보관
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }