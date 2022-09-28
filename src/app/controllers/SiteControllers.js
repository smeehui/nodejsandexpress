class SiteControllers {
    index(req, res) {
        res.render("home");
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
