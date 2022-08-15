import retrieveProductService from "../../services/products/retrieveProductServices"
    
const retrieveProductController = async (request, response) => {
    try {
        const { id } = request.params
        const user = await retrieveProductService(id)
        return response.status(200).json(user)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}


export default retrieveProductController;