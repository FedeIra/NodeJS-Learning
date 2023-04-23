import server from '../../src/server';
const request = require('supertest');

afterEach(done => {
  server.close();
  done();
});

describe('routes/codereviewvideos', () => {
  const games = ['World of Warships', 'Battlefield'];

  games.forEach((game: string) => {
    it(`should allow adding a game to the list - ${game}`, async () => {
      const response = await request(server)
        .post('/codereviewvideos')
        .send({ game });

      expect(response.status).toEqual(201);
      expect(response.type).toEqual('application/json');
      expect(response.body).toEqual({
        games: [game]
      });
    });
  });
});
