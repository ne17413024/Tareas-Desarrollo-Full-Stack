const request = require('supertest');
const app = require('../src/app');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.test' });

const token = jwt.sign(
  { id: '123456789012345678901234' },
  process.env.JWT_SECRET
);

describe('Product Routes', () => {

  it('Debe negar acceso sin token', async () => {
    const res = await request(app)
      .get('/api/products');

    expect(res.statusCode).toBe(401);
  });

  it('Debe permitir acceso con token', async () => {
    const res = await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

});
