const User = require('../models/User');

exports.createUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to create user'
      });
    }
    res.json({ user });
  });
};

exports.getAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to get users'
      });
    }
    res.json(users);
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to get user'
      });
    }
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'Failed to update user'
      });
    }
    res.json(user);
  });
};

exports.deleteUser = async (req, res) => {
try {
const user = await User.findByIdAndDelete(req.params.userId);
if (!user) {
return res.status(404).json({
message: 'User not found'
});
}
res.status(200).json({
message: 'User deleted successfully'
});
} catch (error) {
res.status(500).json({
error: error.message
});
}
};