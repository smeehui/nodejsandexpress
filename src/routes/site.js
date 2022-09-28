import express from "express";
import SiteControllers from "../app/controllers/SiteControllers";
const app = express();
const siteRouter = express.Router();

siteRouter.use("/search", SiteControllers.search);
siteRouter.use("/news", SiteControllers.news);
siteRouter.use("/", SiteControllers.index);

export default siteRouter;
