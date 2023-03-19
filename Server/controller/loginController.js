const db = require("../models/index")
const User = db.user;
// const tokenList = {}
const jwt = require("jsonwebtoken");
const config = require("../config/authConfig");

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  try {
    const exesistinUser = await User.findOne({ email: email });
    if (!exesistinUser) {
      return res.status(404).json({ message: "User not found" });
    } else if (exesistinUser.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      const token = jwt.sign(
        { email: exesistinUser.email, id: exesistinUser._id },
        config.secret
      );

      res.status(201).json({
        token: token,
        user: exesistinUser,
      });
    }
  } catch (err) {
    console.log("something went wrong: " + err.message);
  }
};


// exports.addAdmin = (req, res) => {
//   const {name, email, password, } = req.body;
//   const admin = new Admin({
//     name,
//     email,
//     password
//   });
//   admin.save((err, newAdmin) => {
//     if (err) {
//       return res.status(500).send({
//         status: "Failed",
//         message: "Failed to Give Feedback",
//       });
//     } else {
//       return res.status(200).send({
//         status: "Success",
//         newAdmin,
//       });
//     }
//   });
// };
