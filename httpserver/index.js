const express= require("express")
const  app=express()
const port=5000;

var users=[
    {
        name:'John',
        kidneys:[{
            healthy:false,
        },{
            healthy:true,
        }]
    }
]
app.use(express.json())
app.get('/' ,(req,res)=>{

    const johnKid=users[0].kidneys;
    const noOfKidneys=johnKid.length;
    let noofHealthyKidneys=0;

    for(let i=0 ;i<noOfKidneys;i++){
        if(johnKid[i].healthy){
            noofHealthyKidneys++;
        }
    }
    const noofUnHealthyKidneys=noOfKidneys-noofHealthyKidneys;
    res.json({
        noOfKidneys,
        noofHealthyKidneys,
        noofUnHealthyKidneys
    })

})

app.post("/",(req,res)=>{
    const {isHealty}=req.body;

    users[0].kidneys.push({
        healthy : isHealty
    })

    res.json({
        message:"Added new kidney"
    })
})

app.put("/",(req,res)=>{
      for(let i=0 ;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
      }

      res.json({
        message:"kidney updated to healthy"
      })
})

app.delete("/",(req,res)=>{
    //do check for any bad kidneys is there or not 

    if(atleastOneKidneys()){
        const newKidneys=[];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
     }
     else{
        res.status(411).json({
            message:"You do not have bad kidney"
        })
     }
   }
    
    users[0].kidneys=newKidneys
    res.json({
        message:'un healthy kidneys deleted'
    })
    }

  
})

function atleastOneKidneys(){
    let atleastOneKidney =false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){           
            atleastOneKidney=true         
        }
      }
      return atleastOneKidney
}
app.listen(port,()=>{
    console.log("Server is runningon PORT 5000")
})