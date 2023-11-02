const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

describe("Test Suite 2", function(){

    const baseUrl = "https://reqres.in/api";

    it("Test 1 - GET", function(done){
        chai.request(baseUrl)
            .get('/user')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.to.be.json;
                done();
            });
    });

});