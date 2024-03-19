let express=require('express')
let app=express();
let bodyparser=require('body-parser');
app.use(bodyparser.json());

app.get('/',(req,res)=>{
  res.send("welcome to my api");
})

app.post('/bajaj1',(req,res)=>{
  const {data}=req.body;
  const email="ayush0345.be21@chitkara.edu.in";
  const userId="ayush_shukla_24112003";
  const rollno="2110990345";

  if(!data || !Array.isArray(data))
    return res.status(400).json({
      success:false,
      message:"data is in invalid form"
    });

  const even=data.filter(item=>!isNaN(item) && item%2==0)
  const odd=data.filter(item=>!isNaN(item) && item%2!=0)
  const alpha=data.filter(item=>item.match(/^[a-zA-Z]+$/)).map(item=>item.toUpperCase());
  console.log(alpha);

  const response={
    is_success:true,
    user_id:userId,
    email:email,
    roll_number:rollno,
    odd_number:odd,
    even_number:even,
    alphabets:alpha,
  }

  res.status(200).json(response);
});

app.listen(3000,()=>{
  console.log("running at 3000")
});