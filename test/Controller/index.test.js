const should = require('should');
const findServer = require('../../src/Controller');
const { expect } = require('chai');

describe('Find Server Controller ', () => {

    it('findServer function',async () => {
        const servers = await findServer();
        expect(servers).to.not.be.empty;
    });
});