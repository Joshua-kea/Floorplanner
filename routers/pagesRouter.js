import { authPage } from "../templatingEngine/pages.js";
import { Router } from "express";

const router = Router();

router.get("/auth", (req, res) => {
  res.send(authPage);
});

export default router;
