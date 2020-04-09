const express = require("express");

const app = express();

const port = 8000;

app.get('/', (req, res) => res.send("hello world!"));
app.get("/login", (req, res) => res.send("you are in the login page"));
app.get("/signout", (req, res) => res.send("you are being signed out, have some patience"));
app.get("/sagar", (req, res) => res.send("sagar is an instagram addicted cunt"));
app.listen(port, () => {
  console.log("Server is up and running");
});

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// after making any changes you have to restart the as of now