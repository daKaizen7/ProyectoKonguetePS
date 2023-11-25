import { SECRET_TOKEN } from "../../js/connectMongo.js";
import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
    if (err)
      return res
        .status(401)
        .json({ message: "Invalid token, authorization denied" });

    req.user = decoded;
  });
  next();
};
