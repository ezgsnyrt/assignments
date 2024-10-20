const arr = ["apple", "banana peel", "orange juice", "grapes", "strawberry"];

//select a random item from the array
let randomItem:string = arr[Math.floor(Math.random()*arr.length)];
console.log(randomItem);



//reverse a string's characters
function reverseString(str:string) {
    //split each character of a string and return it in an array
    let splitString = str.split("");
    console.log(splitString);

    //reverse the array
    let reverseArray = splitString.reverse();
    console.log(reverseArray);

    //join all elements of an array into a string
    let joinArray = splitString.join();
    console.log(joinArray);

    return joinArray;
}
reverseString(randomItem);



//convert a string to upper case
function upperCase (upperCaseItem:string):void {
    upperCaseItem = randomItem.toUpperCase();
    console.log(upperCaseItem);
}
upperCase(randomItem);


// randomItem = randomItem.replace(/ /g, "");

//count a string's characters
function countCharacters(item:string) {
    item = item.replace(/ /g, "");
    console.log(item.length);
    return item.length;
}
countCharacters(randomItem);

export { arr, randomItem, reverseString, upperCase, countCharacters };