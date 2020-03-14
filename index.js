const mongoose = require('mongoose');

const populateDB = require('./populate');

const productSchema = mongoose.Schema({
  name: String,
  brand: String,
  type: [String],
  price: Number,
  rating: Number,
  warranty_years: Number,
  available: Boolean,
  color: String,
  monthly_price: Number,
  sales_tax: Boolean,
  term_years: Number,
  cancel_penalty: Number,
});
const Product = mongoose.model('Product', productSchema);

mongoose
  .connect('mongodb://localhost:27017/sample_data',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(async () => {
    await populateDB();
    const products = await Product.find({ $or: [
      {name: { $regex: "Phone"} },
    ] });
    console.log(products);
  })
  .catch((err) => console.log(err));