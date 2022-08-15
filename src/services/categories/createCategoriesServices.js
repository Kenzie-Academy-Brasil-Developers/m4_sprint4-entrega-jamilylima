import database from "../../database"

const createCategoriesServices = async (categorieData) => {
    try {
        const categorie = categorieData
        
        
        const res = await database.query(
            `INSERT INTO
               categories(name)
            VALUES
                ($1)
            RETURNING *;`,
            [categorie.name]
        )
    
        return res.rows[0]
        
        
    } catch (error) {
        throw new Error(error)
    }
}

export default createCategoriesServices