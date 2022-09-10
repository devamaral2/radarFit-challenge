import connection from '../../../lib/dbConnect'
import Product from '../../../models/Product'

// async function getCollection() {
//   const db = await connection();
//   return db.collection('products');
// }


export default async function handler(req, res) {
  const { method } = req

  await connection()
  // const Product = await getCollection();

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find().ToArray();
        const finalList = products.map(({produto}) => {produto})
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const product = await Product.insertOne( req.body ) 
        console.log(product)
        res.status(201).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false, error: error.messange })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
