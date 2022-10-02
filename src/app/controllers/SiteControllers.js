import EntModel from "../models/Courses";
import { converArray } from "/home/smeenguyen/nodevsex/learnnodeandex/src/utils/mongose.js";

class SiteControllers {
    index(req, res, next) {
        EntModel.find({})
            .then((data) => res.render("home", { ents: converArray(data) }))
            .catch(next);
    }

    news(req, res) {
        //show detailes news/:slug
        res.render("news");
    }
    search(req, res) {
        res.render("search");
    }
}
export default new SiteControllers();
