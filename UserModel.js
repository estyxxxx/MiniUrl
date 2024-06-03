import mongoose from "mongoose";
import LinkModel from "./LinkModel.js";

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, },
    email:{ type:String, required:true },
    password:{ type:String, required:true },
    links: Array
});

export default mongoose.model("users", UserSchema);