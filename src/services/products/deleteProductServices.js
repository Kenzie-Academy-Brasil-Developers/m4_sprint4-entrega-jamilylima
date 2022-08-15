import database from '../../database'

const deleteProductService = async (productId) => {
    try {
        const res = await database.query(
            `DELETE FROM
                products
            WHERE
                id = $1
            RETURNING *;`,
            [productId]
        )

        if(res.rowCount === 0){
            throw new Error('product not found')
        }

    } catch (error) {
        throw new Error(error)
    }
}

export default deleteProductService