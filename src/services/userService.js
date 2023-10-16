import User from "../models/User.js";

class UserService {
  async createUser(userAttributes) {
    const newUser = new User(userAttributes);
    const savedUser = await newUser.save();
    return savedUser;
  }

  async getAllUsers() {
    const users = await User.find();
    return users;
  }

  async getUserById(userId) {
    const user = await User.findById(userId);
    return user;
  }

  async updateUser(userId, userAttributes) {
    const updatedUser = await User.findByIdAndUpdate(userId, userAttributes, {
      new: true,
    });
    return updatedUser;
  }

  async deleteUser(userId) {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  }
}

export default new UserService();
