import express from "express";
const app = express();
const port = 3000;

app.get("/home", (req, res) => res.send("hello world"));
app.listen(port, (req, res) => console.log(`Listening on ${port}`));
