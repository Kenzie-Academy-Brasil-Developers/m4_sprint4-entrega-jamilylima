import database from "../../database"

const createProductsServices = async (productsData) => {
    try {
        const product = productsData
        
        const res = await database.query(
            `INSERT INTO
               products(name,price,category_id)
            VALUES
                ($1, $2, $3)
            RETURNING *;`,
            [product.name, product.price, product.category_id]
        )
        return res.rows[0]
        
    } catch (error) {
        throw new Error(error)
    }
}

export default createProductsServices