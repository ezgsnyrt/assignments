const items = [1,2,3,4,5];

// function test() {
//     let items = [1,2]
//     console.log(items);
// }

// test();

for (let i = 0; i < items.length;i++) {
    console.log(i);
}

let i = 0;
while(i < items.length) {
    console.log("while: ",i);
    i++;
}

// function deneme(age) {
//     if (age > 15) {
//         return "cem";
//     } else {
//         console.log("age: ", age)
//         age += 1
//         return deneme(age)
//     }
// }
// let userName = deneme(10);

// console.log(userName)