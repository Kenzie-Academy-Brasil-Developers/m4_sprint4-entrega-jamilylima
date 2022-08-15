import listProductsCategoryService from "../services/listProductCategorieServices"


const listProductsCategorieController = async (request, response) => {
    try {
        const id = request.params.id
        const productsCategorie = await listProductsCategoryService(id)
        return response.status(200).json(productsCategorie)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listProductsCategorieController;