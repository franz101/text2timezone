import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.time),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(time) {
  const capitalizedTime = time[0].toUpperCase() + time.slice(1).toLowerCase();
  return `Convert text into summertime timezone. 

Text: SG time 
Timezone: GMT+8 
Text: PST
Timezone: GMT-7
Text: la
Timezone: GMT-7
Text: Pacific time
Timezone: GMT-7
Text: german time
Timezone: GMT+2
Text: uk
Timezone: GMT+1
Text: sf
Timezone: delji
Text: GMT+5:30
Timezone: GMT-7
Text: israel
Timezone: GMT+3
Text: tlv
Timezone: GMT+3
Text: ${capitalizedTime}
Timezone:`;
}
