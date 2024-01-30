
let start=performance.now()
const add=setTimeout(sum,5000)



function sum(){
    let end=performance.now()
    console.log(end-start);
    return 5+6
}

let start=performance.now()
const add=setTimeout(sum,5000)



function sum(){
    let end=performance.now()
    console.log(end-start);
    return 5+6
}
