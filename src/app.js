import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categorieRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes"

const app = express();

app.use(express.json());
app.use('/categories', categorieRouter)
app.use('/products',productsRouter)

export default app.listen(process.env.PORT||3000, () => {
  startDatabase()
  console.log("Server running");
});
