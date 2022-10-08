import crypto from "crypto";

export const createRandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(48, (error, buff) => {
      if (error) reject(error);
      const token = buff.toString("hex");
      resolve(token);
    });
  });
