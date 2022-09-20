import jwt from "jsonwebtoken";
import { Token } from "../db/models/token.model.js";

export const tokenService = {
  generateTokens: (payload) => {
    const refresh_token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    const access_token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });

    return {
      refresh_token,
      access_token,
    };
  },

  saveToken: async (userUuid, refresh_token) => {
    await Token.sync();
    const tokenData = await Token.findOne({ where: { userUuid } });
    if (tokenData) {
      tokenData.refresh_token = refresh_token;
      return tokenData.save();
    }
    return await Token.create({ refresh_token, userUuid });
  },

  // findTokenByUserId: async (userUuid) =>
  //   await Token.findOne({ where: { userUuid } }),

  findToken: async (refresh_token) =>
    Token.findOne({ where: { refresh_token } }),
  validateAccessToken: (token) => {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return userData;
    try {
    } catch (error) {
      return null;
    }
  },

  validateRefreshToken: (token) => {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
    try {
    } catch (error) {
      return null;
    }
  },

  removeToken: async (refresh_token) => {
    const tokenData = await Token.destroy({ where: { refresh_token } });
    return tokenData;
  },
};
