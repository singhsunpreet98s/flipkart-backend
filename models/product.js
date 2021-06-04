const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
   productTitle: {
      type: String,
      min: 3,
      max: 200,
      required: true
   },
   productDesc: {
      type: String,
      mix: 3,
      max: 500,
      required: true
   },
   price: {
      type: Number,

      required: true
   },
   img: {
      type: String,
      required: true
   },
   brand: {
      type: String,
      min: 2,
      max: 50,
      required: true
   },
   discount: {
      type: Number,
      required: true,
      default: 0
   },
   owner: {
      type: Schema.Types.ObjectId,
      ref: 'user'
   }

}, { timestamps: true });

module.exports = mongoose.model('products', productSchema)