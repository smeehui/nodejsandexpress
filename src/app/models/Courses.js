import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Ents = new Schema({
    id: ObjectId,
    year: Number,
    code: String,
    name: String,
    slug: String,
    variable: String,
    value: Number,
    unit: String,
    img: String,
});

const EntModel = mongoose.model("Ents", Ents, "busitest");
export default EntModel;
