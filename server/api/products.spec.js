/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
// const Products = db.model('user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return User.create({
//         email: codysEmail
//       })
//     })

//     it('GET /api/users', async () => {
//       try {
//         const res = await request(app)
//           .get('/api/users')
//           .expect(200)
//       } catch (error) {
//         console.log(error)
//       }

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].email).to.be.equal(codysEmail)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')