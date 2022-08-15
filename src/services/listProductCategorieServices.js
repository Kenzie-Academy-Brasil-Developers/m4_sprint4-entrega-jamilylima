import database from "../database";

const listProductsCategoryService = async (id) => {
  try {
    const res = await database.query(
      ` SELECT 
            p.name,
            p.price,
            c.name category 
        FROM
            products p
        JOIN 
            categories c ON p.category_id = c.id
        WHERE c.id = $1`,
      [id]
    );
    return res.rows
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsCategoryService;
