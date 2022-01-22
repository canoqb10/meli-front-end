"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = __importDefault(require("./utils/error-handler"));
const options = {
    origin: true,
    preflightContinue: true,
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'X-HTTP-Method-Override',
        'Content-Type',
        'Accept'
    ],
    methods: ['OPTIONS', 'HEAD', 'GET']
};
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.app.use((0, cors_1.default)(options));
        this.app.use(express_1.default.json());
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_handler_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
