import jwt from "jsonwebtoken";

export const generateTokens = (userId) => ({
  access_token: jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15min",
  }),
  refresh_token: jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  }),
});

export const decodeJWT = (access_token) =>
  jwt.verify(access_token, process.env.JWT_SECRET);
