import EntModel from "../models/Courses";
import { convertObject } from "/home/smeenguyen/nodevsex/learnnodeandex/src/utils/mongose.js";

class EntsController {
    index(req, res, next) {
        EntModel.findOne({ value: req.params.slug })
            .then((ent) => res.render("ents/ent", { ent: convertObject(ent) }))
            .catch(next);
    }
}
export default new EntsController();
