import database from "../../database"
    
const retrieveCategorieService = async (categorieId) => {
    try {
        const res = await database.query(
            `SELECT
                 name
            FROM
                categories
            WHERE
                id = $1`,
            [categorieId]
        )

        if(res.rowCount === 0){
            throw new Error('User not found')
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default retrieveCategorieService