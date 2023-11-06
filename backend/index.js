import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { URL } from "./mongo.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const url = await URL.findOne({ shortenURL: id });
    console.log("Hello " + url);
    if (url) {
      const validUrl =
        url.originalURL.startsWith("http://") ||
        url.originalURL.startsWith("https://")
          ? url.originalURL
          : `http://${url.originalURL}`;

      res.redirect(validUrl);
    } else {
      res.send({
        message: "URL not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/", (req, res) => {
  const originalURL = req.body.URL;
  const shortenURL = Math.random().toString(36).substr(2, 5);
  const createdAt = new Date();
  const newURL = new URL({ shortenURL, originalURL});
  newURL.save();
  res.status(200).send({
    message: `https://snipme.me/${shortenURL}`,
  });
});

//start server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
