import express from "express";
import SiteControllers from "../app/controllers/SiteControllers";
const app = express();
const siteRouter = express.Router();

siteRouter.get("/search", SiteControllers.search);
siteRouter.get("/news", SiteControllers.news);
siteRouter.get("/", SiteControllers.index);

export default siteRouter;
