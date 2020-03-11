import next from "next";
import { setConfig } from "next/config";
import * as dotenv from "dotenv";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import sessions from "client-sessions";
import morgan from "morgan";

import api from "./api";

dotenv.config();

export type User = {
  sub: string;
  name: string;
  email: string;
};

const port = parseInt(process.env.PORT || "4000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const sessionSecret = process.env.SESSION_SECRET || "some-session-secret";

const handle = app.getRequestHandler();

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandeled rejection; Promise:", p, " Reason:", reason);
  process.exit(1);
});

app
  .prepare()
  .then(() => {
    app.setAssetPrefix(process.env.HOST_URL ?? "http://localhost:4000/");
    setConfig({
      publicRuntimeConfig: {
        hostUrl: process.env.HOST_URL || "http://localhost:4000/",
      },
    });

    // create, configure and start server
    const server = express();
    server.set("trust proxy", true);
    server.use(
      sessions({
        cookieName: "session",
        secret: sessionSecret,
        duration: 2 * 60 * 60 * 1000, // in ms
        activeDuration: 5 * 60 * 1000, // in ms
        cookie: {
          httpOnly: true,
        },
      })
    );

    server.use(bodyParser.json());

    /// Initiate base logging on requests using Morgan
    const log_format = dev ? "dev" : "short";
    server.use(morgan(log_format));

    // Api endpoints
    server.use("/api", api);

    // Statics namespace
    server.use("/s", express.static(path.join(__dirname, "../public/static")));

    // Next application router.
    server.all("*", (req, res) => handle(req, res));

    // Init server.
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `> Server listening at http://localhost:${port} as ${
          dev ? "development" : process.env.NODE_ENV
        }`
      );
    });
  })
  .catch((err) => {
    console.error("An error occured, unable to start server");
    console.error(err);
    process.exit(1);
  });
