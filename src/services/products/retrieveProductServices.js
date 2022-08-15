import database from "../../database"

const retrieveProductService = async (retrieveProductServiceId) => {
    try {
        const res = await database.query(
            `SELECT
                name, price
            FROM
                products
            WHERE
                id = $1`,
            [retrieveProductServiceId]
        )
            
        if(res.rowCount === 0){
            throw new Error('User not found')
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveProductService