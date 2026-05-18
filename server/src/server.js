import cors from "cors";
import express from "express";
import path from "path";
import "./env.js";
import { decodeJWT, generateTokens } from "./utils/jwt.js";
import { tn } from "./utils/tn.js";

import { categories } from "./mocks/categories.mocks.js";
import { games } from "./mocks/games.mocks.js";
import { user } from "./mocks/users.mocks.js";
import { fileURLToPath } from "url";

import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.4:5173", "http://192.168.100.254:5173"],
    credentials: true,
  }),
);

// Middleware Auth ---------------------------
const authenticate = (req, res, next) => {
  const access_token = req.cookies?.access_token;

  if (!access_token)
    return res.status(401).json({ ok: false, reason: "No token provided" });

  try {
    const decoded = decodeJWT(access_token);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Unexpected error",
    });
  }
};
// Middleware Auth ---------------------------

// Helthy Route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

const prefix = `/api/v1`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesPath = path.join(__dirname, "images");
const videosPath = path.join(__dirname, "videos");
console.log("STATIC PATH:", imagesPath);

app.use(`${prefix}/images`, express.static(imagesPath));
app.use(`${prefix}/video`, express.static(videosPath));

// Auth Routes
app.post(`${prefix}/auth/login`, (req, res) => {
  const { email, password } = req.body;

  try {
    if (email === user.email && password === user.password) {
      const { access_token, refresh_token } = generateTokens(user.id);

      res.cookie("access_token", access_token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 15 * 60 * 1000,
      });
      // res.cookie("refresh_token", refresh_token, {
      //   httpOnly: true,
      //   secure: false,
      //   sameSite: "Strict",
      //   maxAge: 7 * 24 * 60 * 60 * 1000,
      //   path: "/auth/refresh-token",
      // });

      const { password, ...rest } = user;

      return res.status(200).json({
        ok: true,
        data: rest,
      });
    } else {
      return res.status(401).json({
        ok: false,
        reasons: `Invalid credentials`,
      });
    }
  } catch (error) {
    return res.status(400).json({
      ok: false,
      reasons: `Unexpected error`,
    });
  }
});

app.post(`${prefix}/auth/logout`, authenticate, (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "none",
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, reason: error.message });
  }
});

app.get(`${prefix}/searching-games`, (req, res) => {
  return res.status(200).json({
    ok: true,
    data: games,
  });
});

app.post(
  `${prefix}/searching-games/:gameID/team/:teamID/join`,
  authenticate,
  (req, res) => {
    const { gameID, teamID } = req.params;
    const user = req.user;
    try {
      const game = games.find((g) => g.id === Number(gameID));
      const team = game.searches.find((t) => t.id === Number(teamID));

      team.players.push({
        name: user.name,
      });

      return res.status(200).json({
        ok: true,
        data: games,
      });
    } catch (error) {}
  },
);

app.post(
  `${prefix}/searching-games/:gameID/join-queue`,
  authenticate,
  (req, res) => {
    const { gameID } = req.params;
    const user = req.user;

    return tn(
      async () => {
        const game = games.find((g) => g.id === Number(gameID));

        if (!game) {
          return res.status(404).json({
            ok: false,
            message: "Game not found",
          });
        }

        let targetTeam = game.searches.find((team) => team.players.length < 3);

        if (!targetTeam) {
          targetTeam = {
            id: game.searches.length + 1,
            team: "XXX",
            players: [],
          };

          game.searches.push(targetTeam);
        }

        targetTeam.players.push({
          name: user.name,
        });

        return res.status(200).json({
          ok: true,
          data: {
            gameID,
            assignedTeam: targetTeam,
            allGames: games,
          },
        });
      },
      (error) => {
        return res.status(500).json({
          ok: false,
          message: error.message,
        });
      },
    );
  },
);

app.get(`${prefix}/categories`, (req, res) => {
  return res.status(200).json({
    ok: true,
    data: categories,
  });
});

/**
 * No se usa
 */
app.post(`${prefix}/auth/register`, (req, res) => {
  console.log("Register");
});

app.get((req, res, next) => {
  res.status(404).json({
    err: "NOT_FOUND_PAGE",
    message: "Error 404 | Not Found",
  });
});

app.listen(3000, (req, res) => {
  console.log("Running on port 3000");
});
