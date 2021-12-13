const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Plant = mongoose.model("plant", PlantSchema);

module.exports = Plant;
