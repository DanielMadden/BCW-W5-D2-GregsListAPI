import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    wage: { type: Number, required: true },
    description: { type: String, maxlength: 144 },
})

export default Job