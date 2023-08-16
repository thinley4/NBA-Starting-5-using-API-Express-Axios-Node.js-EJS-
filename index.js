import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.balldontlie.io/api/v1/players/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/get", async (req, res) => {
    const number = Math.floor(Math.random() * 500) + 1;
    try {
        const result = await axios.get(API_URL + "/" + number);
        res.render("index.ejs", { content: result.data });
    } catch (error) {
        res.render("index.ejs", { content: result.data });
    }
});
app.post("/g2", async (req, res) => {
    const number = Math.floor(Math.random() * 500) + 1;
    try {
        const result = await axios.get(API_URL + "/" + number);
        res.render("index.ejs", { c1: result.data });
    } catch (error) {
        res.render("index.ejs", { c1: result.data });
    }
});
app.post("/g3", async (req, res) => {
    const number = Math.floor(Math.random() * 500) + 1;
    try {
        const result = await axios.get(API_URL + "/" + number);
        res.render("index.ejs", { c2: result.data });
    } catch (error) {
        res.render("index.ejs", { c2: result.data });
    }
});
app.post("/g4", async (req, res) => {
    const number = Math.floor(Math.random() * 500) + 1;
    try {
        const result = await axios.get(API_URL + "/" + number);
        res.render("index.ejs", { c3: result.data });
    } catch (error) {
        res.render("index.ejs", { c3: result.data });
    }
});
app.post("/g5", async (req, res) => {
    const number = Math.floor(Math.random() * 500) + 1;
    try {
        const result = await axios.get(API_URL + "/" + number);
        res.render("index.ejs", { c4: result.data });
    } catch (error) {
        res.render("index.ejs", { c4: result.data });
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
