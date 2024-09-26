import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import { User } from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import { UNAUTHORIZED } from "../constants/http.js";

dotenv.config();

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["token"];
  }
  return token;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload.userId });

      if (user) {
        return done(null, user);
      } else {
        return done(
          new AppError(UNAUTHORIZED, "Unauthorized - user not found"),
          false
        );
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// specifying 'JWT' as the strategy.
export const authenticateJwt = passport.authenticate("jwt", { session: false });
