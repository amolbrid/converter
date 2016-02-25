var expect = require("chai").expect;
var request = require("supertest");

var server = require('../app/server');

describe("Color Code Converter API", function() {
  describe("RGB to Hex conversion", function() {
    var path = "/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(done) {
      request(server)
        .get(path)
        .expect(200, done);
    });

    it("returns the colors in hex", function(done) {
      request(server)
        .get(path)
				.expect(200, "ffffff", done);
    });
  });

  describe("Hex to RGB conversion", function() {
    var path = "/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(server)
        .get(path)
        .expect(200, done);
    });

    it("returns the colors in RGB", function(done) {
      request(server)
        .get(path)
        .end(function(err, res) {
          expect(res.text).to.equal("[0,255,0]");
          done();
        });
    });
  });
});
