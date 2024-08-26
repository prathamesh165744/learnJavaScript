let person={
    name:"prathamesh",
    age:20,
    address:{
        city:"washim",
        state:"maharashtra"

    }
}
let secondperson = JSON.parse(JSON.stringify(person))

secondperson.address.city="ratnagiri"

console.log(person)
console.log(secondperson)