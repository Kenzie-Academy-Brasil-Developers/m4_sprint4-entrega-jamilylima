import updateCategorieService from "../../services/categories/updateCategorieServices"

const updateCategorieController = async (request, response) => {
    try {
        const id = request.params.id
        const categorie = request.body
        const categorieData = await updateCategorieService(id, categorie)
        return response.status(200).json(
            {
                message : "Atualizada",
                category: categorieData
            })
    } catch (error) {
        return response.status(400).json({
            message: error.message 
        })
    }
}

export default updateCategorieController;