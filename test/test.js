const  app = require('../app');
const supertest = require('supertest')
const { expect }= require('chai');


const request = supertest(app);


describe("POSITIVE TEST ",async()=>{
    it('/ root', async()=>{
        let res = await request.get('/');
        expect(res.body).not.to.be.null;
        expect(res.body.message).to.equal('Hello Wolrd');
        expect(res.status).to.equal(200);
    })

    it('/defame', async()=>{
        let res = await request.get('/defame');
        
        expect(res.status).to.equal(200)
        expect(res.body).not.to.be.null;
        expect(res.body.message).to.equal('Shame on you'+process.env.ASH)
    })
})