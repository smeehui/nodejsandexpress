import express from "express";
import EntsController from "../app/controllers/EntsController";
const entsRouter = express.Router();

entsRouter.get("/:slug", EntsController.index);

export default entsRouter;
