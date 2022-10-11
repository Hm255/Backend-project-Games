const app = require("../app");
const testData = require('../db/data/test-data')
const request = require("supertest");
const db = require("../db/connection");
const seed = require('../db/seeds/seed');
const {expect} = require('@jest/globals') 

beforeEach(()=>{
  return seed(testData)
})

afterAll(() => {
    db.end();
    
  });

  describe("GET/api/categories", () => {
    test("200: return categories array", () => {
      return request(app)
        .get('/api/categories')
        .expect(200)
        .then(({ body: {categories} }) => {
          expect(categories).toHaveLength(4);
          expect(categories.forEach((category)=>{
            expect(category).toEqual(expect.objectContaining({slug: expect.any(String), description: expect.any(String)}))
          }))
        });
    });
  });



/*
beforeEach: this returns the test data from the linked table
*/