import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  personalID: string;
  verified: boolean;
  tempOTP: {
    timeStamp: number;
    OTP: string;
  };
  refreshToken: string;
}

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  personalID: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  verified: Boolean,
  tempOTP: {
    timeStamp: Number,
    OTP: String,
  },
  refreshToken: String,
});

// module.exports = mongoose.model("User", userSchema);
export default model<IUser>("User", userSchema);
