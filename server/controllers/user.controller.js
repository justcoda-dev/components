import { User } from "../db/models/user.model.js";
import { userService } from "../services/user.service.js";
import {
  userEmailSchema,
  userPasswordSchema,
  userStringSchema,
} from "./validation/user.validation.js";

// export const JWT_ACCESS = "228papirosim";
// export const JWT_REFRESH = "322solo";

//bcrypt.compareSync(password, hash); // перевірка

export const user = {
  // POST
  //   attributes: {exclude: ['pass   word']} - без пароля
  postUserLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);

      if (user) {
        res.cookie("refreshToken", user.refresh_token, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: false,
        });
        res.status(200).json({ user, status: true });
        return;
      }
      throw new Error("cant login");
    } catch (error) {
      res.status(401).json({ error, status: false });
      console.error(error);
    }
  },
  postUserLogOut: async (req, res) => {
    try {
      const { refreshToken } = req.cookies;
      console.log(`token from cookie`, refreshToken);
      const token = await userService.logOut(refreshToken);
      res.clearCookie("refreshToken");

      return res.json(token);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  getUserList: async (req, res) => {
    try {
      const page = req.query.page ? req.query.page : 1;
      const pageSize = req.query.limit ? req.query.limit : 5;
      const list = await userService.usersList(
        parseInt(page) - 1,
        parseInt(pageSize)
      );

      res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const { uuid } = req.query;
      const user = await User.findOne({
        where: { uuid },
      });
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },

  registrationUser: async (req, res) => {
    try {
      const { lastname, firstname, password, email, ip } = req.body;

      const validationError = () => {
        return (
          userEmailSchema.validate(email).error ||
          userPasswordSchema.validate(password).error ||
          userStringSchema.validate(lastname).error ||
          userStringSchema.validate(firstname).error
        );
      };

      if (!validationError()) {
        const user = await userService.registration({
          lastname,
          firstname,
          password,
          email,
          ip,
        });
        console.log("registration", user);
        res.cookie("refreshToken", user.refresh_token, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: false,
        });

        return res.status(200).json({ user, status: true });
      }

      throw validationError();
    } catch (error) {
      console.error(error);
      res.status(404).json({ error, status: false });
    }
  },
  activateUser: async (req, res) => {
    try {
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },

  refresh: async (req, res) => {
    try {
      const { refreshToken } = req.cookies;
      const user = await userService.refresh(refreshToken);
      res.cookie("refreshToken", user.refresh_token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
      });
      res.status(200).json({ user, status: true });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error, status: false });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { uuid } = req.query;
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { uuid } = req.query;
      const deleted = await User.destroy({
        where: {
          uuid,
        },
        force: true,
      });
      res.status(204).json({ deleted });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  uploadUserImage: async (req, res) => {
    try {
      const { uuid } = req.query;

      const filePath = `${req.imagePath}/${req.name}`;
      await User.update(
        { image: filePath },
        {
          where: {
            uuid,
          },
        }
      );
      if (filePath.length > 5) {
        res.status(200).json({ filePath });
      }
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  deleteUserImage: async (req, res) => {
    try {
      const { uuid } = req.query;
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
};
