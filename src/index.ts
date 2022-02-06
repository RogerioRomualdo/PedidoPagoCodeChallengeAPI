import express from "express";
import "express-async-errors";
import { globalErrorHandler } from "./helpers/errorHandling";
import PharmacyRouter from "./routes/pharmacy.routes";
import ProductsRouter from "./routes/product.routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.APP_PORT;

const app = express();

app.use(express.json());
app.use(globalErrorHandler);

app.use(PharmacyRouter);
app.use(ProductsRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
