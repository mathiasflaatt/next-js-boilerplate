import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    api: "",
    version: process.env.VERSION || "x.x.x",
  });
});

router.post("/", (req, res) => {
  res.json(req);
});

export default router;
