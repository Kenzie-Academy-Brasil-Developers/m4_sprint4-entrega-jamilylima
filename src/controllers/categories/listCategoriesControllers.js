import listCategorieService from "../../services/categories/listCategoriesServices"

const listCategorieController = async (request, response) => {
    try {
        const categories = await listCategorieService()
        return response.status(200).json(categories)
    } catch (error){
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listCategorieController;
