import { default as siteRouter } from "./site";

function routes(app) {
    app.use("/", siteRouter);
}

export default routes;
