import { tokenService } from "../services/token.service.js";

export const authMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    console.log("AUTHORIZATION HEADER", req.headers);
    if (!authorizationHeader) {
      return next(new Error("error header"));
    }
    const [_, accessToken] = authorizationHeader.split(" ");
    if (!accessToken) {
      return next(new Error("error header"));
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(new Error("error header"));
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(new Error("error header"));
  }
};
