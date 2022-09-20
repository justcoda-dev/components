import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import { User } from "../db/models/user.model.js";
import { userDto } from "../dto/user.dto.js";
import { tokenService } from "./token.service.js";

export const userService = {
  registration: async ({ email, password, firstname, lastname, ip }) => {
    try {
      await User.sync();
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        throw new Error("user is already exist");
      }
      const hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.HASH_SLAT)
      );
      const activation_link = v4();

      const user = await User.create({
        email,
        password: hashPassword,
        activation_link,
        firstname,
        lastname,
        ip,
      });
      const tokens = tokenService.generateTokens({ email: user.email });

      await tokenService.saveToken(user.uuid, tokens.refresh_token);
      return userDto({ ...tokens, ...user.dataValues });
    } catch (error) {
      console.error(error);
    }
  },

  login: async (email, password) => {
    try {
      const candidate = await User.findOne({
        where: { email },
      });

      if (!candidate) {
        console.log("no candidate");
        return;
      }

      const passwordStatus = bcrypt.compareSync(password, candidate.password);
      if (!passwordStatus) {
        return;
      }

      const tokens = tokenService.generateTokens({ email: candidate.email });

      await tokenService.saveToken(candidate.uuid, tokens.refresh_token);
      return userDto({ ...candidate.dataValues, ...tokens });
    } catch (error) {
      console.error(error);
    }
  },

  logOut: async (refreshToken) => await tokenService.removeToken(refreshToken),

  refresh: async (refreshToken) => {
    if (!refreshToken) {
      throw new Error("refresh token is  wrong");
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      console.error("error refresh");
      throw new Error("un authorized error");
    }

    const user = await User.findOne({ where: { email: userData.email } });
    const tokens = tokenService.generateTokens({ email: user.email });
    await tokenService.saveToken(user.uuid, tokens.refresh_token);
    return userDto({ ...tokens, ...user.dataValues });
  },
  usersList: async (page, pageSize) => {
    const paginate = (query, { page, pageSize }) => {
      const offset = page * pageSize;
      const limit = pageSize;
      return {
        ...query,
        offset,
        limit,
      };
    };
    const usersList = await User.findAndCountAll(
      paginate(
        {
          where: {},
          attributes: {
            exclude: [
              "is_activated",
              "activation_link",
              "updatedAt",
              "createdAt",
              "password",
              "image",
              "ip",
            ],
          },
        },
        { page, pageSize }
      )
    );
    const allPages = Math.ceil(usersList.count / pageSize);
    return { ...usersList, page: page + 1, pageSize, allPages };
  },
};
