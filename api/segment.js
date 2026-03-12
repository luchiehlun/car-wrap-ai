export default async function handler(req, res) {

const image = req.body.image;

const response = await fetch(
"https://api.replicate.com/v1/predictions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":`Token ${process.env.REPLICATE_API_TOKEN}`
},
body:JSON.stringify({
version:"a8b6c4f8f9e2a3c0c8d3e1e6a9f5b7c0",
input:{
image:image
}
})
}
);

const data = await response.json();

res.status(200).json(data);

}
