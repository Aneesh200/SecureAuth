import express from 'express'
const app = express();
import Product from '../models/prodInfo.js';
import UniqueID from '../models/uniqueID.js' 

// Route to handle requests for product details by ID and unique ID
app.get('/product/:productId/:uniqueId', async (req, res) => {
  const { productId, uniqueId } = req.params;
  try {
    // Retrieve the product details by productId
    const product = await Product.findOne({productId});

    // If the product with given ID doesn't exist, return 404
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Retrieve the unique ID details by uniqueId
    const uniqueID = await UniqueID.findOne({ uniqueId });

    // If the unique ID with given uniqueId doesn't exist, return 404
    if (!uniqueID) {
      return res.status(404).json({ error: 'Unique ID not found or does not match the product'});
    }

    // Construct response with product details and current owner
    const response = {
      id: product.productId,
      name: product.productName,
      description: product.productDescription,
      uniqueId: uniqueID.uniqueId,
      currentOwnerId: uniqueID.currentOwner,
      previousOwners: uniqueID.previousOwners,
    };

    // Send the response
    res.json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default app;
