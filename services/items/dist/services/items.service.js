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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemDescriptionById = exports.getItemById = exports.getCategoryById = exports.getCategories = exports.getItems = void 0;
const utils_1 = require("../utils");
/**
 * Request to MeLi API for search items
 * @param q
 * @returns <{data: any, status:string}>
 */
function getItems(q) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, status } = yield utils_1.http.get(`${utils_1.meliSitesURL}${utils_1.meliQueryURL}`, {
            params: {
                q,
                limit: Number(process.env.API_QUERY_MAX_RESULTS),
                offset: 0,
            }
        });
        return { data, status };
    });
}
exports.getItems = getItems;
/**
 * Request to MeLi API for get categories
 * @returns <{data: any, status:string}>
 */
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, status } = yield utils_1.http.get(`${utils_1.meliSitesURL}${utils_1.meliCategoriesURL}`);
        return { data, status };
    });
}
exports.getCategories = getCategories;
/**
 * Request to MeLi API for get a category by id
 * @param id
 * @returns <{data: any, status:string}>
 */
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, status } = yield utils_1.http.get(`${utils_1.meliCategoriesURL}/${id}`);
        return { data, status };
    });
}
exports.getCategoryById = getCategoryById;
/**
 * Request to MeLi API for get an item by id
 * @param id
 * @returns <{data: any, status:string}>
 */
function getItemById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, status } = yield utils_1.http.get(`${utils_1.meliItemDetailURL}`.replace(':id', id));
        return { data, status };
    });
}
exports.getItemById = getItemById;
/**
 * Request to MeLi API for get item description  by item id
 * @param id
 * @returns <{data: any, status:string}>
 */
function getItemDescriptionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('url1', utils_1.meliItemDetailURL.replace(':id', id));
        console.log('url2', `${utils_1.meliItemDetailURL.replace(':id', id)}${utils_1.meliItemDescriptionURL}`);
        const { data, status } = yield utils_1.http.get(`${utils_1.meliItemDetailURL.replace(':id', id)}${utils_1.meliItemDescriptionURL}`);
        return { data, status };
    });
}
exports.getItemDescriptionById = getItemDescriptionById;
