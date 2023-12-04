import User from "../models/user.model.js";
import { encrypt, decrypt } from "../../js/crypto.js";

//Método para obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const usersFound = await User.find();

    let usersFoundArray = []; //nuevo array

    for (let index = 0; index < usersFound.length; index++) {
      usersFoundArray.push({
        id: usersFound[index]._id,
        username: usersFound[index].username,
        email: usersFound[index].email,
        password: decrypt(usersFound[index].password), //mando la contraseña desencriptada
        createdAt: usersFound[index].createdAt,
        updatedAt: usersFound[index].updatedAt,
      });
    }

    res.json(usersFoundArray);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Método para crear un usuario
export const createUser = async (req, res) => {
  const { email, password, username, confirmPassword, role } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json([`El correo ya está registrado`]);
    const newUser = new User({
      username,
      email,
      password: encrypt(password), //se encriptan ambas contraseñas para poder compararse y por seguridad
      confirmPassword: encrypt(confirmPassword),
      agree: true,
      role,
    });

    const userSaved = await newUser.save();
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      role: userSaved.role,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const userUpdated = await User.findOneAndUpdate(
      { _id: req.params.id },
      { username, email, password: encrypt(password), role },
      { new: true }
    );
    console.log(userUpdated);
    return res.json(userUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userFound = await User.findById(req.params.id);
    if (!userFound) return res.status(404).json({ message: "User not found" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      password: decrypt(userFound.password), //mando la contraseña desencriptada
      role: userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
