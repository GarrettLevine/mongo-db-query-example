const mongoose = require('mongoose');

const populateDB = require('./populate');
const { Product, Service, Accessory } = require('./models');


mongoose
  .connect('mongodb://localhost:27017/sample_data',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(async () => {
    await populateDB();
    const products = await Product.find().populate('services accessories');
    console.log(products);
  })
  .catch((err) => console.log(err));