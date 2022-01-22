import express from 'express'
import cors from 'cors'
import errorHandler from './utils/error-handler'

const options: cors.CorsOptions = {
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
}

class App {
  public app: express.Application
  public port: number
 
  constructor(controllers: any, port: number) {
    this.app = express()
    this.port = port
    this.app.use(cors(options))
    this.app.use(express.json())
    
    this.initializeControllers(controllers)
    this.initializeErrorHandling()
  }
 
  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router,)
    })
  }
 
  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}
 
export default App