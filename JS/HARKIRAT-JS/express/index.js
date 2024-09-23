const express =require("express")
const zod =require("zod")
const app =express();


const schema=zod.array(zod.number())
app.use(express.json())


app.get("/health-checkup1",(req,res)=>{
  const {username}=req.headers;
  const {password}=req.headers;
  const {kindenyId}=req.query;
  if(!username == 'tushar' || password != '12345')
  {
    res.status(400).json({
        message:'something is bad with the login input'
    })
    return;
  }

  if(kindenyId!=1 && kindenyId!=2)
  {
    res.status(400).json({
        message:'something is bad with the  input for the kindeny'
    })
    return;
  }
  res.json({
    message:'your kidniy is fine'
})
})

app.post("/health-checkup",(req,res)=>{
   const {kindenys}=req.body;
   const response =schema.safeParse(kindenys) 
    res.send({
      response
    })
})

app.listen(3001,()=>{
    console.log("server is running ")
})