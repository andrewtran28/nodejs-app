const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
})

app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '404html.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http;//localhost:${PORT}`);
});