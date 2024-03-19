import express from "express"
import { dirname } from "path";
import { fileURLToPath} from "url";
import pg from "pg";

const db = new pg.Client({
    user: "root",
    host: "localhost",
    database: "root",
    password: "secret",
    port: 5432,
});

db.connect()

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 1000;

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})

app.post("/submit", async (req, res) => {
    const name = req.body["name"];
    const mail = req.body["email"];
    const message = req.body["message"];

    const result = await db.query("INSERT INTO contacts (name, mail, message) VALUES ($1, $2, $3)", [name, mail, message]);

  res.redirect("/");
})