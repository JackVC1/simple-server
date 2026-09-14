import "dotenv/config";
import express from "express";

const app = express();

app.use(express.static("public"));

const notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
];

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
