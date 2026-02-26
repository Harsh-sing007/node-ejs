import express from "express";
import mongoose from "express"
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({
   extended: true
}
));
// app.listen(8080);

// const products = [
//   { id: 1, name: "Product 1", price: 34 },
//   { id: 2, name: "Product 2", price: 30 },
//   { id: 3, name: "Product 3", price: 50 },
// ];

// app.get("/", (req, res) => {
//   res.render("index", { name: "John" });
// });

// app.get("/products", (req, res) => {
//   res.render("products", { products });
// });

const  dbConnect = async() => {
  await mongoose.connect("mongodb://localhost:27017/merndatabase")
}
const startServer = async()=>
{
  dbConnect()
  app.listen(8080,()=>
  {
    console.log("server started")
  })
}
const productSchema = mongoose.Schema({
  name:{ type: String, required:true },
  discription:{ type: String, required:true },
  price:{ type: Number, required:true },
  imageurl:{ type: String, required:true },
});
const productModel = mongoose.model("products",productSchema)

app.get("/",(req,res)=>{

})

app.post("/",(req,res)=>{
  
})



startServer();