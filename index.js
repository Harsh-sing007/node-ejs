import express from "express";

const app = express();

app.set("view engine", "ejs");

app.listen(8080);

const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 50 },
];

app.get("/", (req, res) => {
  res.render("index", { name: "John" });
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});