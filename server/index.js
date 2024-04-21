import express from "express";
import cors from "cors";
import "dotenv/config";
import GPT from "./routes/ai-assistant.js";




const app = express();
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/gpt", GPT);


app.listen(8080, () => {
  console.log("Working on 8080");
});
