export default async function handler(req, res) {

const image = req.body.image;

const response = await fetch(
"https://api.replicate.com/v1/predictions",
{
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`
},
body: JSON.stringify({
version: "3e2b06c8e5d2c7f6a3a4c3f2e9b4c6e8b0f6e9a8",
input: {
image: image
}
})
}
);

const data = await response.json();

res.status(200).json(data);

}
