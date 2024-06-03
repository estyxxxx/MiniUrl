import mongoose from "mongoose";

const TargetSchema = mongoose.Schema({
    name: { type: String, default: "", required: true },
    value: { type: String, default: "", required: true },
});

export default mongoose.model("targets", TargetSchema);