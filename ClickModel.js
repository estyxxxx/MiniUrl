import mongoose from "mongoose";

const ClickSchema = mongoose.Schema({
    insertedAt: { type: Date, default: Date.now, required: true },
    ipAddress: { type: String, default: "0.0.0.0", required: true },
    targetParamValue: { type: String, default: "", required: true },
});

export default mongoose.model("clicks", ClickSchema);