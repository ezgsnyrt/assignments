import { arr, randomItem, reverseString, upperCase, countCharacters } from './stringUtils';
import fs from 'fs';
import path from 'path';

const sentence:string = "Node.js is significant for developers in that it lets them build scalable applications running JavaScript code on the server side with just-in-time compilation.";


reverseString(sentence);
countCharacters(sentence);
console.log(`${reverseString(sentence)} has ${countCharacters(sentence)} characters.`);


const reversedText:string = reverseString(sentence);
fs.writeFileSync("reversed.txt", reversedText);
console.log("Files are succeeded");

const filePath:string = path.join(__dirname, 'reversed.txt');
console.log(`Reversed text saved at: ${filePath}`);