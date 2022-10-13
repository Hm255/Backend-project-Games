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



  describe("GET/api/review/:review_id", () => {
    test("200: returns a result", () => {
      return request(app)
        .get('/api/reviews/1')
        .expect(200)
        .then(({body}) => {
          expect(body.review).toEqual({
            review_id: 1,
            title: 'Agricola',
            designer: 'Uwe Rosenberg',
            owner: 'mallionaire',
            review_img_url:
              'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png',
            review_body: 'Farmyard fun!',
            category: 'euro game',
            created_at: ("2021-01-18T10:00:20.514Z"),
            votes: 1
          });
        });
    });
    it('should return a 400 if the return is of an invalid type', () => {
      return request (app)
      .get('/api/reviews/buhbuvf')
      .expect(400)
      .then(({body}) => {
        expect(body.msg).toBe('ID is not valid (type is wrong)')
      })
    })
    it('should return a 404 if the return doesnt exist', () => {
      return request(app)
      .get('/api/reviews/999768767896876999')
      .expect(404)
      .then(({body}) => {
        expect(body.msg).toBe('ID does not exist')
      })
    })
  });


  describe("GET/api/users", () => {
    it('should return all users details as shown', () => {
      return request (app)
      .get('/api/users')
      .expect(200)
      .then(({body}) => {
        expect(body.users).toEqual([
          {
            username: 'mallionaire',
            name: 'haz',
            avatar_url:
              'https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg'
          }
          ,
          {
            username: 'philippaclaire9',
            name: 'philippa',
            avatar_url: 'https://avatars2.githubusercontent.com/u/24604688?s=460&v=4'
          }
          ,
          {
            username: 'bainesface',
            name: 'sarah',
            avatar_url: 'https://avatars2.githubusercontent.com/u/24394918?s=400&v=4'
          }
          ,
          {
            username: 'dav3rid',
            name: 'dave',
            avatar_url:
              'https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png'
          }
        ]);
      });
    })
  })