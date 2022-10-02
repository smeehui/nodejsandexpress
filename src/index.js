import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import * as db from "./config/db";

import routes from "./routes";

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
routes(app);
app.use(morgan("tiny"));
// Static
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
db.connect();

app.listen(port, (req, res) => console.log(`I Listening on ${port}`));
