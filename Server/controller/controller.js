const db = require("../models");
const User = db.user;

  exports.register=async (req, res) => {
    try {
      const user = new User(req.body);
      console.log("body req____",req.body)
      await user.save();
      res.status(201).json({ status: 'success', data: user });
    } catch (err) {
      res.status(500).json({ status: 'error', message: err.message });
    }
  };

  
exports.getAll= async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };