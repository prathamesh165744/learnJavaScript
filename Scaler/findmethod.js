const arr=[1,2,-3,4,5]
let negatives= arr.find(function (n){
    return n<0
});
console.log(negatives)

let positives=arr.find(function (n){
    return n>0
})
console.log(positives)