const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// text to text model
// async function run(){    
// const model = genAI.getGenerativeModel({ model: "gemini-pro"});
// const prompt = " write a story of cursed book"
// const result = await model.generateContent(prompt, 1024)
// const res = await result.response
// const finaltext = res.text()
// console.log(finaltext);
// }

// run()
