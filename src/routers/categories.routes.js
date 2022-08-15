import { Router } from "express" 
import createCategoriesController from "../controllers/categories/createCategoriescontrollers";
import listCategorieController from "../controllers/categories/listCategoriesControllers";
import retrieveCategorieController from "../controllers/categories/retrieveCategorieControllers";
import updateCategorieController from "../controllers/categories/updateCategorieControllers";
import deleteCategorieController from "../controllers/categories/deleteCategorieControllers";


const categorieRouter = Router()

categorieRouter.post('', createCategoriesController)
categorieRouter.get('', listCategorieController)
categorieRouter.get('/:id', retrieveCategorieController)
categorieRouter.patch('/:id', updateCategorieController)
categorieRouter.delete('/:id',deleteCategorieController)

export default categorieRouter;