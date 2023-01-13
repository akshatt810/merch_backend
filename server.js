const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

const cors = require("cors");
app.use(cors());
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  return res
    .send(`Merchandise Backend Server is running at port ${port}!`)
    .status(200);
});

app.get("/api/test", async (req, res) => {
  console.log("Test Is Successfull!");
  res.send("Test Is Successfull!").status(200);
});

app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Merchandise Server is running at port ${port}!`);
});
