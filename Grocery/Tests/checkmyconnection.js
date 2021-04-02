const chai = require('chai')
const chaihttp = require('chai-http')
const app = require('../index')

chai.use(chaihttp)
chai.should()

describe('Make sure Status is 200', () => {
    it('should be 200', (done) =>{
        chai.request(app)
        .get('/')
        .end((app.err, app.res), ()=>{
            req.status()
            res.should.have.status(200)
            res.body.should.be.a('object')
            done()
        })
    })
})