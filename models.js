const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  brand: String,
  type: [String],
  price: Number,
  rating: Number,
  warranty_years: Number,
  available: Boolean,
  color: String,
  accessories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accessories',
  }],
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Services',
  }],
});

const accessoriesSchema = mongoose.Schema({
  name: String,
  brand: String,
  type: [String],
  price: Number,
  rating: Number,
  warranty_years: Number,
})

const servicesSchema = mongoose.Schema({
  name: String,
  type: String,
  monthly_price: Number,
  sales_tax: Boolean,
  term_years: Number,
  cancel_penalty: Number,
  limits: {
    voice: {
      units: String,
      n: Number,
      over_rate: Number,
    },
  },
  data: {
    units: String,
    n: Number,
    over_rate: Number,
  },
  sms: {
    units: String,
    n: Number,
    over_rate: Number,
  },
  additional_tarrifs: [{
    kind: String,
    amount: {
      dollar: Number,
      percent_of_service: Number,
    }
  }]
})


exports.Product = mongoose.model('Product', productSchema);
exports.Accessory = mongoose.model('Accessories', accessoriesSchema);
exports.Service = mongoose.model('Services', servicesSchema);
