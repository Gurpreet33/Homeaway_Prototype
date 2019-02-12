var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);

var expect = chai.expect;

it("Should check credentials and return status code", function(done) {
  chai
    .request("http://localhost:3001")
    .post("/search")
    .send({
      place: "San Jose",
      arrive: "11/05/2018",
      depart: "11/12/2018",
      guests: 5
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      done();
    });
});
