import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";

const app = express();

app.use(express.static("src/public"));

app.use(morgan("combined"));

//-------------Template Engine-=---------------
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(3000);
