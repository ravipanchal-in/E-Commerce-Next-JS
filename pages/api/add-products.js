import product from "../../models/product";
import connectDb from "../../middlewares/mongoose";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    for (let i = 0; i < req.body.length; i++) {
      let prdt = new product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
        img: req.body[i].img,
        size: req.body[i].size,
        color: req.body[i].color,
        category: req.body[i].category,
      })
      await prdt.save()
    }
    res.status(200).json({ success: 'Success' })
  } else {
    res.status(400).json({ error: 'This method is not allowed' })
  }
}

export default connectDb(handler) 