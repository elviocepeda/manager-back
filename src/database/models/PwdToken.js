import mongoose from "mongoose";

const pwdTokenSchema = mongoose.Schema({
  owner: {
    type: String,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 3600,
    default: Date.now(),
  },
});

export default mongoose.model("PwdToken", pwdTokenSchema);
