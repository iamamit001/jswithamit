// stack(primative datatype)  heap(non primative)

// primativev 7 type additon ,sunsctraction , multiplaction,

let myName = "amit kumar"
let myAnotherName = myName
 myAnotherName = "akshay"

console.log(myName)
console.log(myAnotherName)


// stack == give us a copy
// heap == give us a reference 


let user ={
    email : "amitwithgoogle@gmail.com",
    idNo : 12344444,
    
}

//console.log(user)
let userone = user

userone.email = "proudwithgoogle@gmail.com"


console.log(userone.email)