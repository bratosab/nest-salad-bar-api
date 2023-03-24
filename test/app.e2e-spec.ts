import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { after } from 'node:test';

const toppings = [
  { id: 1, name: 'Tomatoes', price: 1 },
  { id: 2, name: 'Bacon', price: 2 },
  { id: 3, name: 'Bacon', price: 2 },
  { id: 4, name: 'Nuts', price: 1 },
  { id: 5, name: 'Chicken', price: 3 },
  { id: 6, name: 'Onions', price: 1 },
  { id: 7, name: 'Onions', price: 1 },
  { id: 45, name: 'Bacon', price: 2 },
];
const salads = [
  {
    id: '10b41390-a33e-4828-8384-5b1c65879400',
    username: 'tom',
    date: '2023-03-22T20:40:19.000Z',
  },
  {
    id: '19d38d5a-a2fd-4098-9046-3c42c1f4cd46',
    username: 'tom',
    date: '2023-03-23T08:26:42.000Z',
  },
  {
    id: '307d4502-ae10-443d-859a-3c3fbafb8c46',
    username: 'tom',
    date: '2023-03-23T10:09:32.000Z',
  },
  {
    id: '37066408-3c96-4d34-89b0-ac18318a2c83',
    username: 'tom',
    date: '2023-03-23T08:26:43.000Z',
  },
  {
    id: '3b0b247f-eeee-42c2-850a-c849f256ebf7',
    username: 'tom',
    date: '2023-03-23T10:21:08.000Z',
  },
  {
    id: '46af2a50-af63-4608-8efe-c2e5e7bcdf88',
    username: 'tom',
    date: '2023-03-23T08:26:41.000Z',
  },
  {
    id: '60e4f47b-7eb9-4215-86ec-a7276407105f',
    username: 'tom',
    date: '2023-03-23T08:24:47.000Z',
  },
  {
    id: '72113dfa-b87d-4270-b4c8-f089bf5f0f1e',
    username: 'tom',
    date: '2023-03-23T08:26:35.000Z',
  },
  {
    id: '7ed4286d-4a7d-4d56-9f5c-f71ab43d5591',
    username: 'tom',
    date: '2023-03-23T08:26:05.000Z',
  },
  {
    id: 'a3610661-0311-4923-9db0-7e6a7c869c5d',
    username: 'tom',
    date: '2023-03-23T08:26:40.000Z',
  },
  {
    id: 'cf42a4c7-bfde-4439-9a13-e10ac5b48ef3',
    username: 'tom',
    date: '2023-03-23T08:26:44.000Z',
  },
  {
    id: 'e3ea20ae-d05e-42f3-83e1-529ee72dc315',
    username: 'tom',
    date: '2023-03-23T08:26:46.000Z',
  },
  {
    id: 'e982f73a-ee2c-4ec4-a9d0-2f406bc49822',
    username: 'tom',
    date: '2023-03-23T08:34:55.000Z',
  },
];
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('AppContoller', () => {
    it('/ (GET) have to be authenticated', () => {
      return request(app.getHttpServer()).get('/').expect(403).expect({
        statusCode: 403,
        message: 'Forbidden resource',
        error: 'Forbidden',
      });
    });

    it('/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/')
        .set('authorization', 'user:password')
        .expect(200)
        .expect('Welcome to Salad Bar API!');
    });
  });

  describe('IngredientsController', () => {
    it('/toppings (GET)', () => {
      return request(app.getHttpServer())
        .get('/toppings')
        .set('authorization', 'user:password')
        .expect(200)
        .expect(toppings);
    });
  });

  describe('SaladController', () => {
    it('/salad (GET)', () => {
      return request(app.getHttpServer())
        .get('/salad')
        .set('authorization', 'user:password')
        .expect(200)
        .expect(salads);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
