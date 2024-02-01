require('dotenv').config()
const express = require('express');
const { OpenAI } = require('openai');
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// Configure OpenAI with your API Key
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });

app.post('/llm', async (req, res) => {

    const messages = req.body.messages || [];

    try{
        if (messages.length>0){

            const completion = await openai.chat.completions.create({
                messages: [
                  {
                    role: "system",
                    content: "You are a helpful assistant. Give me the answer in the most consice way posssible with minimum words",
                  },
                  ...messages
                ],
                model: "gpt-3.5-turbo-1106",
                // response_format: { type: "json_object" },
              });
            res.send(completion.choices[0].message.content);
        } else {
            res.status(400).send({status: "error", msg: "empty prompt"});
        }
    } catch(err){
        console.log(err);
        res.status(404).send({status: "error"})
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
