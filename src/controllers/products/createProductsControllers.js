import createProductsServices from "../../services/products/createProductsServices"

const createProductController = async (request, response) => {
    try {
        const categorie = request.body
        const newCategorie = await createProductsServices(categorie)
        return response.status(201).json({
            message: "Product created successfully",
            product: newCategorie
        })
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createProductController