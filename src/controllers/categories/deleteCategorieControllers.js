import deleteCategorieService from "../../services/categories/deleteCategorieServices"

const deleteCategorieController = async (request, response) => {
    try {
        const id = request.params.id
        await deleteCategorieService(id)
        return response.status(204).send()
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default deleteCategorieController
