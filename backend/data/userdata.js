import mongoose from "mongoose";

const newuser =new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        trim :true
    },
},{
    timestamps: true
});

const User = mongoose.model("User", newuser);
export default User;