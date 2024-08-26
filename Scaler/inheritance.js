class person{
    constructor(_Name,_age){
    this.name=_Name,
    this.age=_age
}
}
class teacher extends person{
    constructor(_Name,_age,_stranth){
        super(_Name,_age)
        this.stranth=_stranth
    }
}
class student extends person{
    constructor(_Name,_age,_marks){
        super(_Name,_age,_marks)
        this.marks=_marks
    }
}

let teacher1 =new teacher(`anup`,20,70)

let student1 =new student("prathamesh",20,100)

console.log(teacher1)

console.log(student1)
