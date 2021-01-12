import mongoose from "mongoose"
const Schema = mongoose.Schema

const House = new Schema({
  city: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, default: "No description" }
})

export default House