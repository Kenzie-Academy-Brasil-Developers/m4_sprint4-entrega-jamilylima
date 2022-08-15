import updateProductService from "../../services/products/updateProductServices"

const updateProductController = async (request, response) => {
    try {
        const id = request.params.id
        const product = request.body
        const productData = await updateProductService(id, product)
        return response.status(200).json(
            {
                message : "Atualizado",
                product: productData
            })
    } catch (error) {
        return response.status(400).json({
            message: error.message 
        })
    }
}

export default updateProductController;