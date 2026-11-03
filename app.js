import express from "express";

const app = express();

app.use(express.static("public"));

import authRouter from "./routers/authRouter.js";
import pagesRouter from "./routers/pagesRouter.js";
import projectsRouter from "./routers/api/projectsRouter.js";
import roomsRouter from "./routers/api/roomsRouter.js";
import furnitureRouter from "./routers/api/furnitureRouter.js";

app.use(authRouter);
app.use(pagesRouter);
app.use(projectsRouter);
app.use(roomsRouter);
app.use(furnitureRouter);

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", PORT);
});
