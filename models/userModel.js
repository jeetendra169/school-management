import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, },
        lastName: { type: String, },
        mobileNumber: { type: String, required: true,},
        email: { type: String, required: true, unique: true },
        nationality: { type: String, },
        dob: { type: Date, },
        gender: { type: String, enum: ["Male", "Female", "Other"], },
        occupation: { type: String, },
        experience: { type: Number, },
        website: { type: String, default: "" },
        password: { type: String, }, 
        role: { type: Number, enum: [0, 1, 2, 3], default: 0 }, // Role with default as 0
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
