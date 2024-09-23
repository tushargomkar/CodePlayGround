const express =require("express");

const app=express();


function isOldEnough(age){
    if(age>=14){ return true;}
    else{ return false;}
}


function isOldEnoughMiddle(req,res,next){
    const age=req.query.age
    if(age>=14){
        next()
    }else{
        res.status(411).json({
            msg:'Sorry you are not eligible',
        })
    }
}


// if ou want to use middleware in all of the middleware 
//app.use(isOldEnoughMiddle)
app.get("/ride1",(req,res)=>{
    const age=req.query.age
    console.log(age)
    if(isOldEnough(req.query.age)){
        res.json({
            msg:'You have successfully ridden the ride 1',
        })
    }else{
        res.status(411).json({
            msg:'Sorry you are not eligible',
        })
    }

})
//api using middleware
app.get('/ride3',isOldEnoughMiddle,(req,res)=>{
    res.json({
        msg:'You have successfully ridden the ride 3',
    })
})

app.get("/ride2",(req,res)=>{
    //const age=req.query.age
    console.log(age)
    if(isOldEnough(req.query.age)){
        res.json({
            msg:'You have successfully ridden the ride 2',
        })
    }else{
        res.status(411).json({
            msg:'Sorry you are not eligible',
        })
    }

})


//now we have a ticket checker with the hel of the function isOldEnougth

//now let see with the help of the middle ware 



app.listen(4000);