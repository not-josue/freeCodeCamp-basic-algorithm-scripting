import { convertCtoF } from "./algorithms/celsiusToFahrenheit";
import { reverseString } from "./algorithms/reverseString";
import { factorialize } from "./algorithms/factorialize";
import { findLongestWordLength } from "./algorithms/longestWord";
import { largestOfFour } from "./algorithms/largestOfFour";
import { confirmEnding } from "./algorithms/confirmEnding";
import { repeatStringNumTimes } from "./algorithms/repeatString";
import { truncateString } from "./algorithms/truncateString";
import { findElement } from "./algorithms/findersKeepers";
import { booWho } from "./algorithms/booWhoo";
import { titleCase } from "./algorithms/titleCase";
import { frankenSplice } from "./algorithms/sliceAndSplice";
import { bouncer } from "./algorithms/falsyBouncer";
import { getIndexToIns } from "./algorithms/whereiBelong";
import { mutation } from "./algorithms/mutations";
import { chunkArrayInGroups } from "./algorithms/chunkyMonkey";

export const data = [
  {
    id: 0,
    title: "Celsius to Fahrenheit",
    description:
      "The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit",
    method: convertCtoF,
    input: "Enter Celsius",
    placeholder: "30",
    test: [
      "-30 should return -22",
      "-10 should return 14",
      "0 should return 32",
      "20 should return 68",
      "30 should return 86",
    ],
  },
  {
    id: 1,
    title: "Reverse a String",
    description: "Reverse the provided string and return the reversed string.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string",
    method: reverseString,
    input: "Enter Words",
    placeholder: "Hello, world!",
    test: [
      "hello - should return olleh",
      "Howdy - should return ydwoH",
      "Greetings from Earth - should return htraE morf sgniteerG",
    ],
  },
  {
    id: 2,
    title: "Factorialize a Number",
    description: "Return the factorial of the provided positive integer.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number",
    method: factorialize,
    input: "Enter a Positive Integer",
    placeholder: "5",
    test: [
      "5 should return 120",
      "10 should return 3628800",
      "20 should return 2432902008176640000",
      "0 should return 1",
    ],
  },
  {
    id: 3,
    title: "Longest Word in a String",
    description: "Your response should be a number.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string",
    method: findLongestWordLength,
    input: "Enter a Sentence",
    placeholder: "This is my sentence",
    test: [
      "The quick brown fox jumped over the lazy dog - should return 6",
      "May the force be with you - should return 5",
      "Google do a barrel roll - should return 6",
    ],
  },
  {
    id: 4,
    title: "Largest Numbers in Arrays",
    description:
      "Return an array consisting of the largest number from each provided sub-array.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays",
    method: largestOfFour,
    input: "Enter an Array with at least 1 Subarray",
    placeholder: "[[1, 2, 3, 4]]",
    test: [
      "[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]] should return [9, 35, 97, 1000000]",
    ],
  },
  {
    id: 5,
    title: "Confirm the Ending",
    description:
      "Check if a string (first argument) ends with the given target string (second argument).",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending",
    method: confirmEnding,
    input: "Enter a String (,) and a String",
    placeholder: "Abstraction, action",
    test: [
      "Congratulation, on - should return true",
      "He has to give me a new name, name - should return true",
      "Open sesame, sage - should return false",
    ],
  },
  {
    id: 6,
    title: "Repeat a String",
    description:
      "Repeat a given string (first argument) for num times (second argument).",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string",
    method: repeatStringNumTimes,
    input: "Enter a string (,) and an Integer",
    placeholder: "dfe, 4",
    test: [
      "*, 3 - should return ***",
      "abc, 3 - should return abcabcabc",
      "abc, -2 - should return empty string",
      "abc, 0 should return empty string",
    ],
  },
  {
    id: 7,
    title: "Truncate a String",
    description:
      "Truncate a string (first argument) if it is longer than the given maximum string length (second argument).",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string",
    method: truncateString,
    input: "Enter a string (,) and an Integer",
    placeholder: "abcdefg, 4",
    test: [
      "A-tisket a-tasket A green and yellow basket, 8 - should return A-tisket...",
      "A-, 5 - should return A-",
      "A-, 0 - should return ...",
    ],
  },
  {
    id: 8,
    title: "Finders Keepers",
    description:
      "Look through an array and return the first element in it that passes a truth test.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers",
    method: findElement,
    input:
      "Enter an Array (,) and a Function like Tests using num as a Variable and any Integers",
    placeholder: "[2, 4, 6, 7, 8], num => num % 3 === 0",
    test: [
      "[1, 3, 5, 8, 9, 10], num => num % 2 === 0 - should return 8",
      "[1, 3, 5, 9], num => num % 2 === 0 - should return undefined",
    ],
  },
  {
    id: 9,
    title: "Boo Who",
    description:
      "Check if a value is classified as a boolean primitive. Return true or false.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who",
    method: booWho,
    input: "Enter any Input",
    placeholder: "true",
    test: [
      "true should return true",
      "false should return true",
      "[1, 2, 3] should return false",
      "1 should return false",
    ],
  },
  {
    id: 10,
    title: "Title Case a Sentence",
    description:
      "Return the provided string with the first letter of each word capitalized.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence",
    method: titleCase,
    input: "Enter a Sentence in any Case",
    placeholder: "Hello, world",
    test: [
      "I'm a little tea pot - should return I'm A Little Tea Pot",
      "sHoRt AnD sToUt - should return Short And Stout",
    ],
  },
  {
    id: 11,
    title: "Slice and Splice",
    description:
      "You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index of the second array.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice",
    method: frankenSplice,
    input: "Enter an array with a subarray (,) a subarray (,) and an integer",
    placeholder: "[[1, 2, 3, 4], [], 0]",
    test: [
      "[[1, 2, 3], [4, 5], 1] should return [4, 1, 2, 3, 5]",
      "[[1, 2, 3, 4], [], 0] should return [1, 2, 3, 4]",
    ],
  },
  {
    id: 12,
    title: "Falsy Bouncer",
    description:
      'Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.',
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer",
    method: bouncer,
    input: "Enter an array, JavaScript special values do not require quotes",
    placeholder: "[null, NaN, 1, 2, undefined]",
    test: [
      '[7, "ate", "", false, 9] should return [7, ate, 9]',
      '["a", "b", "c"] should return [a, b, c]',
      "[null, NaN, 1, 2, undefined] should return [1, 2]",
    ],
  },
  {
    id: 13,
    title: "Where do I Belong",
    description:
      "Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong",
    method: getIndexToIns,
    input: "Enter an array (,) and an integer",
    placeholder: "[2, 5, 10], 15",
    test: [
      "[10, 20, 30, 40, 50], 35 should return 3",
      "[3, 10, 5], 3 should return 0",
      "[], 1 should return 0",
    ],
  },
  {
    id: 14,
    title: "Mutations",
    description:
      "Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations",
    method: mutation,
    input: "Enter an array with two strings",
    placeholder: '["Tiger", "Zebra"]',
    test: [
      '["hello", "hey"] should return false',
      '["Mary", "Army"] should return true',
      '["hello", "neo"] should return false',
    ],
  },
  {
    id: 15,
    title: "Chunky Monkey",
    description:
      "Write a function that splits an array into groups the length of size and returns them as a two-dimensional array.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey",
    method: chunkArrayInGroups,
    input: "Enter an array of integers (,) and an integer",
    placeholder: "[0, 1, 2, 3, 4, 5, 6, 7, 8], 4",
    test: [
      "[0, 1, 2, 3, 4, 5], 2 should return [[0, 1], [2, 3], [4, 5]]",
      "[0, 1, 2, 3, 4, 5, 6], 3 should return [[0, 1, 2], [3, 4, 5], [6]]",
    ],
  },
];
