import bcrypt from 'bcrypt';
import { UserModel } from '../models/User.js';

class UserService {
  constructor() { }

  async createUser(data) {
    // Check if username exists:
    const existingUser = await this.getUser(data.username);

    if (existingUser) {
      throw new Error('Username already exists.');
    }
    // hash password:
      const hash = await bcrypt.hash(data.password, 10);

      const newUser = await UserModel.create({
        ...data,
        password: hash
      });

    // return username without password:
    return {
      username: newUser.username,
      createdAt: newUser.createdAt
    }
  }

  // service to get user:
  async getUser(username) {
    const existingUser = await UserModel.findOne({ username });
    return existingUser;
  }

  // service to get user by id:
  async getUserById(id) {
    const user = await UserModel.findById(id);
    console.log(user.dataValues);
    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt
    };
  }

  // service to delete user:
  async deleteUser(id) {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return deletedUser;
  }

  // service to update user:
  async updateUser(id, data) {

      if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    const updatedUser = await UserModel.findOneAndUpdate(id, data, { new: true })

    return {
      id: updatedUser.id,
      username: updatedUser.username,
      createdAt: updatedUser.createdAt
    };
  }
}

export {UserService};



