"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
/**
 * @file http.ts
 * @description Creates instance http for request to MeLi API
 */
exports.http = axios_1.default.create({ baseURL: constants_1.meliBaseURL });
