const request = require('supertest');
const app = require('../src/app');

describe('Auth Routes', () => {

  it('Debe registrar un usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test',
        email: 'test@test.com',
        password: '123456'
      });

    expect(res.statusCode).toBe(201);
  });

});
