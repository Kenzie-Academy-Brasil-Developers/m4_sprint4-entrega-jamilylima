import database from '../../database'

const updateCategorieService = async(categorieId, categorieData) => {

    try {
        let query = 'UPDATE categories SET '
        const keys = Object.keys(categorieData)
        const values = Object.values(categorieData)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)

        query += ` WHERE id = \$${keys.length+=1} RETURNING *;`

        const res = await database.query(
            query,
            [...values, categorieId]
        )

        if(res.rowCount === 0){
            throw new Error('Categorie not found')
        }

        return res.rows[0]
        
    } catch (error) {
        throw new Error(error)
    }

}

export default updateCategorieService