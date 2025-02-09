const User = require("../models/user");
const multer = require("multer");
const path = require("path");
const { uuidv4 } = require("uuid");
const {uploadOnCloudnary} = require("../utils/cloudnary");


const getAllUsers = async (req, res) => {
  //get all users from the database
  try {
    const users = await User.find({});
    const data = users.map((user) => {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            about: user.about,
            image: user.image,
        };
        })

    res.status(200).json({ success: true, users: data });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addUser = async (req, res) => {
  try {
    // Access form data
    const { name, email, about } = req.body;
    const profileImage = req.file;
    if (!name || !email || !about) {
      return res
        .status(400)
        .json({ success: false, msg: "Please enter all fields" });
    }
    if (!profileImage) {
      return res.status(400).send("No file uploaded.");
    }
    //file path
    const filePath = path.join(__dirname, "..", "public","uploads", profileImage.filename);

    const cloudinaryResponse = await uploadOnCloudnary(filePath);
    if (!cloudinaryResponse) {
      return res.status(500).send("Cloudnary upload failed");
    }

    const imageUrl = cloudinaryResponse.secure_url;
    
    console.log({ name, email, imageUrl });

    const user = await User.create({email, name, about, image: imageUrl});
    await user.save();

    res.json({ success: true, msg: "User added successfully" });

  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getAllUsers,
  addUser,
};
