const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Web survey" });
});

app.post("/submit", (req, res) => {
  const newResult = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    answers: req.body, 
  };

  fs.readFile("results.json", (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    json.push(newResult);

    fs.writeFile("results.json", JSON.stringify(json, null, 2), (err) => {
      if (err) throw err;
      console.log("Data saved!");
      res.redirect("/results");
    });
  });
});

app.get("/results", (req, res) => {
  fs.readFile('results.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('There was an error when reading file.');
    }
    const results = JSON.parse(data);
    res.render('results', { title: "Survey results", results }); 
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});