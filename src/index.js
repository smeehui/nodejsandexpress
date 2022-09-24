import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(morgan("tiny"));
// Static
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));
app.listen(port, (req, res) => console.log(`Listening on ${port}`));
