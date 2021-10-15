import db from "@utils/db";
import Product from "models/product";
import nc from "next-connect"
import handler from "../test";

const io = nc();

io.get(async (req,res) => {
    await db.connect();
    const products = await Product.find({});
    res.send(products);
});

export default io