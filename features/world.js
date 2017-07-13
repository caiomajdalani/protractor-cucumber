'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

class Chai {
    constructor() {
        this.expect = chai.expect;
    }
}

module.exports = Chai;