const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

const data = ["Mengheak Pheng"];

app.get("/", (req,res) => {
  res.send(`
    <body 
      style="background:pink">
      <h1>DATA:</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/about">About Me</a>
    </body> 
  `);
});

app.get("/about", (req,res) => {
  res.send(`
    <body>
      <h2>I'm a Developer</h2>
      <a href="/">DataHome</a>
    </body>
  `);
});

app.get('/api/data',(req,res) => {
  console.log("Data is sent!")
  res.send(data)
});

app.post('/api/data',(req,res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name); 
  res.sendStatus(201);
});

app.delete('/api/data',(req,res) => {
  data.pop();
  console.log("Successfully deleted end of endpoint!");
  res.statusCode(203);
});

app.listen(PORT,() => {
  console.log("App is listenting on port ",PORT); 
});