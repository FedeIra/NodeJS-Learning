import server from '../../src/server';
// import request from 'supertest';

const request = require('supertest');

// close the server after each test
afterEach(done => {
  server.close();
  done();
});

describe('routes/healthcheck', () => {
  it('should pong', async () => {
    const response = await request(server).get('/ping');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual('pong');
  });
});
