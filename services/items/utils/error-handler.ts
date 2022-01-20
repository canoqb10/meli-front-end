import express from 'express'

export class PlatformError extends Error {
    constructor(
      readonly statusCode: number,
      readonly errorCode: string,
      message: string,
      readonly reason?: Error | any,
    ) {
      super(message)
    }
  }

export class BadRequestError extends PlatformError {
    constructor(message = 'Invalid request', readonly reason?: Error | any) {
      super(400, message, reason)
    }
}
  
export class ItemNotFoundError extends PlatformError {
    constructor(message = 'item not found') {
      super(404, 'item-not-found', message)
    }
}
  
export class InternalServerError extends PlatformError {
    constructor(
      type = 'internal-server-error',
      message = 'Oops, server error',
      readonly reason?: Error | any,
    ) {
      super(500, type, message, reason)
    }
}
  
export function errorHandler(error: PlatformError, res: express.Response) { 
  if (error.statusCode === 404 || error.statusCode === 400 ) { 
    res.status(error.statusCode).send(error)
  }
    
  return res.status(500).send(new InternalServerError())
}

export default errorHandler