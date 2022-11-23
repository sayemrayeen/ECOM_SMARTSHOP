import express from "express";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// for example to get response from server
// app.use((req, res, next) => {
//   // console.log("Hello");
//   console.log(req.originalUrl);
//   next();
// });

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port ${PORT}`.yellow.bold
  )
);
