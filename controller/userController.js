const User = require("./../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      users,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;

  next();
};
