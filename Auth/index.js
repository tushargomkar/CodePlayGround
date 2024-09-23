const jwt=require("jsonwebtoken")


const value ={
    name:"tushar",
    accountNumber:122331145
}


const token= jwt.sign(value,"secret");

const verifiedValue=jwt.verify(token,"secret");
console.log(verifiedValue)