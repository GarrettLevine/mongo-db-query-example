const { MongoClient } = require('mongodb');

module.exports = async function populateDB() {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('sample_data')
    const productsCol = db.collection('products')
    await productsCol.drop();
    const products = await productsCol.insertMany([
      { "name" : "AC3 Phone", "brand" : "ACME", "type" : ["phone"], "price" : 200, "rating" : 3.8,"warranty_years" : 1, "available" : true },
      { "name" : "AC7 Phone", "brand" : "ACME", "type" : ["phone"], "price" : 320, "rating" : 4,"warranty_years" : 1, "available" : false },
      { "name" : "AC3 Series Charger", "type" : [ "accessory", "charger" ], "price" : 19, "rating" : 2.8,"warranty_years" : 0.25 },
      { "name" : "AC3 Case Green", "type" : [ "accessory", "case" ], "color" : "green", "price" : 12, "rating" : 1,"warranty_years" : 0 },
      {  "name" : "Phone Extended Warranty", "type" : "warranty", "price" : 38, "rating" : 5,"warranty_years" : 2, },
      { "name" : "AC3 Case Black", "type" : [ "accessory", "case" ], "color" : "black", "price" : 12.5, "rating" : 2,"warranty_years" : 0.25, "available" : false  },
      { "name" : "AC3 Case Red", "type" : [ "accessory", "case" ], "color" : "red", "price" : 12, "rating" : 4,"warranty_years" : 0.25, "available" : true },
      { "name" : "Phone Service Basic Plan", "type" : ["service"], "monthly_price" : 40,"rating" : 3, "term_years" : 2 },
      { "name" : "Phone Service Core Plan", "type" : ["service"], "monthly_price" : 60, "rating" : 3,  "term_years" : 1 },
      { "name" : "Phone Service Family Plan", "type" : ["service"], "monthly_price" : 90,"rating" : 4,  "sales_tax" : true, "term_years" : 2 },
      { "name" : "Cable TV Basic Service Package", "type" : ["tv"], "monthly_price" : 50, "rating" : 3.9,"term_years" : 2, "cancel_penalty" : 25, "sales_tax" : true },
    ]);
    client.close();
  } catch(err) {
    console.log(err);
    throw err;
  }
}
