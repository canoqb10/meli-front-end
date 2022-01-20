"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const items_controller_1 = __importDefault(require("./controllers/items.controller"));
const utils_1 = require("./utils");
/**
 * Creates a server instance and create a listener
 */
const app = new server_1.default([
    new items_controller_1.default(),
], utils_1.apiPort);
app.listen();
