import { Request, Response, NextFunction, Router } from 'express';
import { author } from '../package.json'

import {
  getItems,
  getCategoryById,
  getItemById,
  getItemDescriptionById,
} from '../services/items.service'

import {
  meliItemNotFoundImgURL,
  errorHandler,
  PlatformError,
  ItemNotFoundError,
  BadRequestError,
} from '../utils'


/**
 * Items controller class, definition of endpoints
 */
class ItemsController {
  public path = '/api/items';
  public router = Router();
 

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.searchItems);
    this.router.get(`${this.path}/:id`, this.searchItem);
  }
 
  searchItems = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { search } = req.query
        console.log('search items', search)
        if (!search) {
            throw new BadRequestError('search param is required')
        }
        
        const resResults = await getItems(<string>search)
        console.log('items found')
        if (!resResults.status || resResults.status !== 200) {
          throw new ItemNotFoundError('Get data MeLi API not found')
        }
       
        let categories: any = []
        for await (let item of resResults.data.results) {
          const _res = await getCategoryById(item.category_id)
          if (!_res.status || _res.status !== 200) {
            return
          }
          
          categories = [...new Set(_res.data.path_from_root.map(({ name }: {name: string})=> name))]
        }

        const results: any = {
          author,
          categories: categories,
          items: resResults.data.results.map((item: any) => ({
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
        }
        console.log('sending items')
        res.status(200).send(results)
      } catch (error: PlatformError | any) {
        console.log('error', error)
        return next(error)
      } 
  }

  searchItem = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params
        let idMeli: string | undefined = id
        
        console.log('find item', id)
        
        if (id === 'undefined') { 
          idMeli = undefined
        }

        if (!idMeli) {
          throw new BadRequestError('item ID is required')
        }
        const { data, status } = await getItemById(id)
        console.log('item found', data)
        const resDes = await getItemDescriptionById(id)
        const resCat = await getCategoryById(data.category_id)
        if ((!status || status !== 200) &&
           (!resDes.status || resDes.status !== 200) &&
           (!resCat.status || resCat.status !== 200)
        ) {
          throw new ItemNotFoundError('Get Item data MeLi API not found')
        }

        const result: any = {
          author,
          categories: resCat.data.path_from_root.map(({ name }: {name: string})=> name),
          item: {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: data.price,
              decimals: 0,
            },
            picture:
              Array.isArray(data.pictures) && data.pictures.length > 0 ?
                data.pictures[0].url : meliItemNotFoundImgURL,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: resDes.data.plain_text,
          }
        }
        console.log('sending item')
        res.status(200).send(result)
      } catch (error: PlatformError | any) {
        console.log('error', error)
        return next(error)
      }
    
  }
 
}
 
export default ItemsController;