import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

export function encrypt(password) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(password);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    key: key.toString("hex"),
    iv: iv.toString("hex"),
    encryptedPassword: encrypted.toString("hex"),
  };
}

export function decrypt(password) {
  let key = Buffer.from(password.key, "hex");
  let iv = Buffer.from(password.iv, "hex");
  let encryptedText = Buffer.from(password.encryptedPassword, "hex");
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
