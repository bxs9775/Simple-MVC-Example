//require mongoose
const mongoose = require('mongoose');

//Sets mongoose's promise to an ES6 promise.
mongoose.promise = global.Promise;

//Data model for Dogs
let DogModel = {};

//Database schema for the Dog collection
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdDate: {
    type: Number,
    required: true,
  }
});

//Finds the dog in the collection with the given name.
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

//Creates the DogModel based on the DogSchema
DogModel = mongoose.module('Dog',DogSchema);

//Export module
module.export = {
  DogModel,
  DogSchema
}