import { Router } from "express";

const router = Router();

router.post("/api/login", (req, res) => {
  console.log(req.body);
  res.redirect("/auth");
});

router.post("/api/signup", (req, res) => {
  console.log(req.body);
  res.redirect("/auth");
});

export default router;