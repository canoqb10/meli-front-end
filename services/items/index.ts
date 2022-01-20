import App from './server';
import ItemsController from './controllers/items.controller';
import { apiPort } from './utils'
/**
 * Creates a server instance and create a listener
 */
const app = new App(
  [
       new ItemsController(),
  ],
  apiPort,
)
     
app.listen()

