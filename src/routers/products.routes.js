import { Router } from "express" 
import createProductController from "../controllers/products/createProductsControllers";
import listProductsController from "../controllers/products/listProductsControllers";
import retrieveProductController from "../controllers/products/retrieveProductControllers";
import updateProductController from "../controllers/products/updateProductControllers"
import deleteProductController from "../controllers/products/deleteProductControllers";
import listProductsCategorieController from "../controllers/listProductsCategoryControllers";

const productsRouter = Router()

productsRouter.post('', createProductController)
productsRouter.get('', listProductsController)
productsRouter.get('/:id', retrieveProductController)
productsRouter.patch('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)
productsRouter.get('/category/:id',listProductsCategorieController)


export default productsRouter;