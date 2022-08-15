import retrieveCategorieService from "../../services/categories/retrieveCategorieService"

const retrieveCategorieController = async (request, response) => {
    try {
        const { id } = request.params
        const user = await retrieveCategorieService(id)
        return response.status(200).json(user)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}


export default retrieveCategorieController;