import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyx7Kg3d34F_7vmLBtRClMA_UXa-gWm-DOrrqsYhCONw&s"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;