export default async function handler(req, res) {

const REPLICATE_API = "https://api.replicate.com/v1/predictions";

const apiKey = process.env.REPLICATE_API_KEY;

try {

const response = await fetch(REPLICATE_API, {

method: "POST",

headers: {
"Authorization": `Token ${apiKey}`,
"Content-Type": "application/json"
},

body: JSON.stringify({
version: "db21e45e9a9c",
input: req.body
})

});

const data = await response.json();

res.status(200).json(data);

}

catch(err){

res.status(500).json({error: err.message});

}

}
