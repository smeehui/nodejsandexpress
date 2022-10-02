import entsRouter from "./ents";
import siteRouter from "./site";

function routes(app) {
    app.use("/ents", entsRouter);
    app.use("/", siteRouter);
}

export default routes;
