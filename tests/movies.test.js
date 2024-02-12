const request = require('supertest');
const app = require('../app');

describe('GET /api/movies', () => {
  it('should return all movies', async () => {
    const response = await request(app).get('/api/movies');
    console.log('response status:', response.status);
    console.log('Response body:', response.body);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe('GET /api/movies/:id', () => {
  it('should return one movie', async () => {
    const movieId = 1;
    const response = await request(app).get(`/api/movies/${movieId}`);
    console.log('response status:', response.status);
    console.log('Response body:', response.body);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toEqual(200);
    
  });
});
describe('GET /api/movies/:id', () => {
    it('should return one movie', async () => {
      const movieId = 0;
      const response = await request(app).get(`/api/movies/${movieId}`);
      console.log('response status:', response.status);
      console.log('Response body:', response.body);
      expect(response.status).toEqual(404);
      
    });
  });
