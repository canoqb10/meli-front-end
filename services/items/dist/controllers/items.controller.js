"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const package_json_1 = require("../package.json");
const items_service_1 = require("../services/items.service");
const utils_1 = require("../utils");
/**
 * Items controller class, definition of endpoints
 */
class ItemsController {
    constructor() {
        this.path = '/items';
        this.router = (0, express_1.Router)();
        this.searchItems = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            try {
                const { search } = req.query;
                console.log('search items', search);
                if (!search) {
                    throw new utils_1.BadRequestError('search param is required');
                }
                const resResults = yield (0, items_service_1.getItems)(search);
                console.log('items found');
                if (!resResults.status || resResults.status !== 200) {
                    throw new utils_1.ItemNotFoundError('Get data MeLi API not found');
                }
                let categories = [];
                try {
                    for (var _b = __asyncValues(resResults.data.results), _c; _c = yield _b.next(), !_c.done;) {
                        let item = _c.value;
                        const _res = yield (0, items_service_1.getCategoryById)(item.category_id);
                        if (!_res.status || _res.status !== 200) {
                            return;
                        }
                        categories = [...new Set(_res.data.path_from_root.map(({ name }) => name))];
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                const results = {
                    author: package_json_1.author,
                    categories: categories,
                    items: resResults.data.results.map((item) => ({
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: item.price,
                            decimals: 0,
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping,
                        location: item.address.state_name,
                        categories: item.categories,
                    }))
                };
                console.log('sending items');
                res.status(200).send(results);
            }
            catch (error) {
                console.log('error', error);
                return next(error);
            }
        });
        this.searchItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    throw new utils_1.BadRequestError('ID is required');
                }
                console.log('find item', id);
                const { data, status } = yield (0, items_service_1.getItemById)(id);
                console.log('item found', data);
                const resDes = yield (0, items_service_1.getItemDescriptionById)(id);
                const resCat = yield (0, items_service_1.getCategoryById)(data.category_id);
                if ((!status || status !== 200) &&
                    (!resDes.status || resDes.status !== 200) &&
                    (!resCat.status || resCat.status !== 200)) {
                    throw new utils_1.ItemNotFoundError('Get Item data MeLi API not found');
                }
                const result = {
                    author: package_json_1.author,
                    categories: resCat.data.path_from_root.map(({ name }) => name),
                    item: {
                        id: data.id,
                        title: data.title,
                        price: {
                            currency: data.currency_id,
                            amount: data.price,
                            decimals: 0,
                        },
                        picture: Array.isArray(data.pictures) && data.pictures.length > 0 ?
                            data.pictures[0].url : utils_1.meliItemNotFoundImgURL,
                        condition: data.condition,
                        free_shipping: data.shipping.free_shipping,
                        sold_quantity: data.sold_quantity,
                        description: resDes.data.plain_text,
                    }
                };
                console.log('sending item');
                res.status(200).send(result);
            }
            catch (error) {
                console.log('error', error);
                return next(error);
            }
        });
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.searchItems);
        this.router.get(`${this.path}/:id`, this.searchItem);
    }
}
exports.default = ItemsController;
