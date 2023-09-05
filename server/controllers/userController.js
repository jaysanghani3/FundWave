const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } 
  catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      // Duplicate email
      return res.status(422).send({ success: false, message: "Email address already registered!" });
    } else if (error.name === "ValidationError") {
      // Handle validation error
      const errorMessages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ errors: errorMessages });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  
  const { email, password } = req.body;
  
  try {
    // Use the User model to find the user by email
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
 
    if (!user) {
      return res.status(401).json({ message: "Incorrect Email !!!" });
    }
    
    else if (!isMatch) {
      return res.status(401).json({ message: "Incorrect Password !!!" });
    }

    else if (user.isAdmin !== true) {
      return res.status(222).json({ message: "Employee Login successful" });
    }

    else if(user.isAdmin === true && isMatch && user.email === email)
    {
      return res.status(221).json({ message: "Admin Login successful" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred" });
  } 
};
