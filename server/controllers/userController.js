const User = require('../models/user');

// Create a new user
exports.createUser = (req, res) => {
// Create a new user object
const user = new User({
name: req.body.name,
email: req.body.email,
password: req.body.password,
});

// Save the user to the database
user.save()
.then(() => {
// Send a response with the created user
res.json(user);
})
.catch(err => {
// Send a response with the error message
res.json(err);
});
};

// Get all users
exports.getAllUsers = (req, res) => {
// Find all users in the database
User.find()
.then(users => {
// Send a response with the users
res.json(users);
})
.catch(err => {
// Send a response with the error message
res.json(err);
});
};

// Get a specific user
exports.getUser = (req, res) => {
// Find a user by their id
User.findById(req.params.userId)
.then(user => {
// Send a response with the user
res.json(user);
})
.catch(err => {
// Send a response with the error message
res.json(err);
});
};

// Update a specific user
exports.updateUser = (req, res) => {
// Find a user by their id and update their information
User.findByIdAndUpdate(req.params.userId, req.body)
.then(() => {
// Send a response with a message indicating the update was successful
res.json({ message: 'User updated successfully' });
})
.catch(err => {
// Send a response with the error message
res.json(err);
});
};

// Delete a specific user
exports.deleteUser = (req, res) => {
// Find a user by their id and delete them from the database
User.findByIdAndDelete(req.params.userId)
.then(() => {
// Send a response with a message indicating the deletion was successful
res.json({ message: 'User deleted successfully' });
})
.catch(err => {
// Send a response with the error message
res.json(err);
});
};