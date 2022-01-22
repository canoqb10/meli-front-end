"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.InternalServerError = exports.ItemNotFoundError = exports.BadRequestError = exports.PlatformError = void 0;
class PlatformError extends Error {
    constructor(statusCode, errorCode, message, reason) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.reason = reason;
    }
}
exports.PlatformError = PlatformError;
class BadRequestError extends PlatformError {
    constructor(message = 'Invalid request', reason) {
        super(400, message, reason);
        this.reason = reason;
    }
}
exports.BadRequestError = BadRequestError;
class ItemNotFoundError extends PlatformError {
    constructor(message = 'item not found') {
        super(404, 'item-not-found', message);
    }
}
exports.ItemNotFoundError = ItemNotFoundError;
class InternalServerError extends PlatformError {
    constructor(type = 'internal-server-error', message = 'Oops, server error', reason) {
        super(500, type, message, reason);
        this.reason = reason;
    }
}
exports.InternalServerError = InternalServerError;
function errorHandler(error, request, response, next) {
    if (error.statusCode === 404 || error.statusCode === 400) {
        return response.status(error.statusCode).send(error);
    }
    return response.status(500).send(new InternalServerError());
}
exports.errorHandler = errorHandler;
exports.default = errorHandler;
