export default async function handler(req, res) {

try{

const response = await fetch(
"https://api-inference.huggingface.co/models/facebook/sam-vit-huge",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
inputs:req.body.image
})
}
);

const data = await response.json();

res.status(200).json(data);

}

catch(error){

res.status(500).json({
error:error.message
});

}

}
