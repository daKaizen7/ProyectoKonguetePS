import User from "../models/user.model.js";
import crypto from "crypto";
import { encrypt, decrypt } from "../../js/crypto.js";
import { createAccessToken } from "../libs/jtw.js";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../../js/config.js";

export const register = async (req, res) => {
  const { email, password, username, confirmPassword, agree } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json([`El correo ya está registrado`]);
    const newUser = new User({
      username,
      email,
      password: encrypt(password),
      confirmPassword: encrypt(confirmPassword),
      agree,
      role: "user",
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email: email });

    if (!userFound)
      return res
        .status(400)
        .json({ message: `El correo no está asociado a ninguna cuenta` });

    const isMatch = crypto.timingSafeEqual(
      Buffer.from(password),
      Buffer.from(decrypt(userFound.password))
    );

    if (!isMatch)
      return res.status(400).json({ message: `Contraseña incorrecta` });
    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role: userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: "Contraseña incorrecta" });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verify = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  });
}; //Método para verificar token y dar o no autorización a páginas
