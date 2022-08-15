import database from "../../database"

const listCategorieService = async () => {
    try {
        const res = await database.query(
            `SELECT * FROM categories;`,
            []
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listCategorieService