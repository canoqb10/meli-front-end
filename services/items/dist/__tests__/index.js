"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const items_controller_1 = __importDefault(require("../controllers/items.controller"));
const utils_1 = require("../utils");
const URL = '/api/items';
const author = 'Jose Alberto';
const searchParam = 'bolsas';
const itemNotFoundParam = 'animagolito';
const category = 'Bolsas';
const itemId = 'MLA928290473';
const noItemId = undefined;
let server;
beforeAll(() => {
    server = new server_1.default([new items_controller_1.default()], utils_1.apiPort);
});
describe(`GET ${URL}?search`, () => {
    it('should return 500 and Internal Error if ID search param is receiving but does not exist in MeLi API', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}/:id`)
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.errorCode).toBe('internal-server-error');
            done();
        });
    });
    it('should return 400 and BadRequest Error if request param is not defined', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}?search=`)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.statusCode).toBe(400);
            expect(res.body.errorCode).toBe('search param is required');
            done();
        });
    });
    it('should return 200 and items void array when request param is defined but do not exist items in the MeLi API', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}?search=${itemNotFoundParam}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.author.name).toBe(author);
            expect(res.body.items.length).toBe(0);
            expect(res.body.items.length).toBe(0);
            done();
        });
    });
    it('should return 200 and valid response if request param list is defined', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}?search=${searchParam}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.items.length).toBe(4);
            expect(res.body.author.name).toBe(author);
            expect(res.body.categories.length).toBeGreaterThanOrEqual(0);
            expect(res.body.categories).toContain(category);
            done();
        });
    });
});
describe(`GET ${URL}/:id`, () => {
    it('should return 500 and BadRequest Error if ID param is not existing in MeLi API', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}/${null}`)
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.statusCode).toBe(500);
            expect(res.body.errorCode).toBe('internal-server-error');
            done();
        });
    });
    it('should return 200 and item data if ID is receiving', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}/${itemId}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.author.name).toBe(author);
            expect(res.body.item).toBeDefined();
            expect(res.body.item.id).toBe(itemId);
            expect(res.body.item.price).toBeDefined();
            expect(res.body.item.picture).toBeDefined();
            expect(res.body.item.condition).toBeDefined();
            expect(res.body.item.free_shipping).toBeDefined();
            expect(res.body.item.sold_quantity).toBeDefined();
            expect(res.body.item.description).toBeDefined();
            expect(res.body.categories.length).toBeGreaterThanOrEqual(0);
            done();
        });
    });
    it('should return 400 and BadRequest Error if ID param is not receiving', (done) => {
        (0, supertest_1.default)(server.app)
            .get(`${URL}/` + undefined)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
            if (err)
                return done(err);
            expect(res.body.statusCode).toBe(400);
            expect(res.body.errorCode).toBe('item ID is required');
            done();
        });
    });
});
