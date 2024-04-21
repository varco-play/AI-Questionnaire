import express from "express";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { field } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `create a quiz with 15 questions and tasks related to ${field}, create it in json format and provide for each question and task 4 options and the right answer, don't send anything else except that json, send it like {quiz: questions: []} and inside the questions arr should the objects with the question, options which is arr wwith strings and the answer which is string with the right answer to the question`,
            },
          ],
        },
      ],
    });
    console.log(field);
    res.status(201).json(response.choices[0]);
    console.log(response.choices[0]);
  } catch (err) {
    res.status(500).json("Server problems");
    console.log(err);
  }
});

export default router;
