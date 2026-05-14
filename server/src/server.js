import express from "express";
import cors from "cors";
import "./env.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

// Auth
app.post("/auth/login", (req, res) => {
  console.log("Login");
});
// ! <No se va a user>
app.post("/auth/register", (req, res) => {
  console.log("Register");
});

app.get("/", (req, res) => {
  console.log("Listenting...");
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
