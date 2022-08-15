import createCategoriesServices from "../../services/categories/createCategoriesServices";

const createCategoriesController = async (request, response) => {
    try {
        const categorie = request.body
        const newCategorie = await createCategoriesServices(categorie)
        return response.status(201).json({
            message: "Category created successfully",
            category: newCategorie
        })
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default createCategoriesController