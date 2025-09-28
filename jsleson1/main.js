// let firstname = 'Artem'
// let age = 20

// const a = 5
// const sum = 2+2 
// const minus = 10-5
// const x = 10
// const y = 20
// const result = x * y
// const division = y / 2
// const num = 2
// const instrument = 'Инструмент'
// const box ='ящик'
// const user='user'
// const ages =25
// const isAdmin = true
// const firstnumber = 5
// const secondnumber = 111

// if(firstnumber == secondnumber){

//     const result = firstnumber +secondnumber
//     console.log(result)
// } else{
//     const result = secondnumber - firstnumber
//     console.log(result)
// }
 

// console.log(firstname)
// console.log(age)
// console.log(sum)
// console.log(minus)
// console.log(result)
// console.log(division)
// console.log(3 ** 3)
// console.log( 5 % 2)
// console.log('Hi '+'World')
// console.log(-num)
// console.log(`${instrument} лежит в ${box}`)
// console.log(`${user} admin: ${isAdmin}`)
//  let i =0

// while(i < 10){
//  i = i + 1
//  console.log(i)
// }

// do{
//     i = i +1 
//     console.log(i)
// } while(i<5)


// for ( let i = 1 ; i <=10; i = i + 2){
//     console.log(`Пройдет ${i} круг`)
// }

// const numbers = [1, 2, 3, 4, 5 ]
// for ( let i = 0; i< numbers.length; i++){
//     console.log(numbers[i] + 1)
// }

// function sumNumbers (firstNumber , secondNumber){
//     return firstNumber + secondNumber
// }
// const result = sumNumbers(3 , 10)

// console.log(result)
// console.log(sumNumbers(-2, 2))

// const users = ['Artem' , 'Ann' , 'Alex' , 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
//     for (let i =0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `Ther is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 1))

// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')

// const foo = 'hi mir'
// console.log(foo.toUpperCase())

// const users = [
//     {
//       name: 'alex',
//       age: 23,
//       isAdmin: false  
//     },
//      {
//       name: 'john',
//       age: 23,
//       isAdmin: true  
//     },
    
// ]

// users.push({
//      name: 'ivan',
//       age: 23,
//       isAdmin: false  
// })

// for ( let i = 0; i < users.length; i++){
//     console.log(users[i])
//     console.log(users[i].name)
//      console.log(users[i].age)
    
// }


function myName(Artem) {
  return `Hello ${Artem}`;
}
console.log(myName("Artem"));

const numbers = [1, 5, 7, 9, 11, 17, 22, 33, 45, 77 ]
for( let i =0; i<numbers.length; i++){
    if(numbers[i]> 10){
    console.log(numbers[i])
    }
    
}
function sumNumbers (firstNumber , secondNumber){
    return firstNumber + secondNumber
}
 const result = sumNumbers(3 , 10)
console.log(result)
console.log(sumNumbers(-2, 2))

function deletenumb (firstdelete , seconddelete){
    return firstdelete / seconddelete
}


console.log(deletenumb(33, 11))
console.log(deletenumb(1554,552))

function minsnumb (firstminus , secondminus){
    return firstminus - secondminus
}
console.log(minsnumb(25, 5))
console.log(minsnumb(1, 5))

function multiplynum (firstmylty , secondmulty){
    return firstmylty * secondmulty
}
console.log(multiplynum(11,66))
console.log(multiplynum(522,66))

 