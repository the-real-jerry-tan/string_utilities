/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

 // String manipulation utilities in TypeScript

 // 1. String Reversal
 function reverseString(str: string): string {
     return str.split('').reverse().join('');
 }

 // 2. Check if string is palindrome
 function isPalindrome(str: string): boolean {
     const cleaned = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
     return cleaned === cleaned.split('').reverse().join('');
 }

 // 3. Convert to Title Case
 function toTitleCase(str: string): string {
     return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 }

 // 4. Count Vowels and Consonants
 function countVowelsAndConsonants(str: string): { vowels: number, consonants: number } {
     const vowels = str.match(/[aeiou]/gi)?.length || 0;
     const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
     return { vowels, consonants };
 }

 // 5. Trim String
 function trimString(str: string): string {
     return str.trim();
 }

 // 6. Count Substring Occurrence
 function countSubstring(str: string, subStr: string): number {
     return str.split(subStr).length - 1;
 }

 // 7. Pad String to Given Length
 function padString(str: string, length: number, padChar: string = ' '): string {
     return str.padEnd(length, padChar);
 }

 // 8. Case Insensitive Comparison
 function caseInsensitiveCompare(str1: string, str2: string): boolean {
     return str1.toLowerCase() === str2.toLowerCase();
 }

 // 9. Replace Multiple Spaces with Single Space
 function replaceMultipleSpaces(str: string): string {
     return str.replace(/\s+/g, ' ').trim();
 }

 // 10. Count Words in String
 function wordCount(str: string): number {
     return str.trim().split(/\s+/).length;
 }

 // Test examples
 console.log(reverseString("TypeScript")); // tpircSyT
 console.log(isPalindrome("A man a plan a canal Panama")); // true
 console.log(toTitleCase("typescript is awesome")); // Typescript Is Awesome
 console.log(countVowelsAndConsonants("TypeScript")); // { vowels: 3, consonants: 7 }
 console.log(trimString("  Hello TypeScript  ")); // Hello TypeScript
 console.log(countSubstring("hello hello hello", "hello")); // 3
 console.log(padString("TypeScript", 15, '*')); // TypeScript*****
 console.log(caseInsensitiveCompare("TypeScript", "typescript")); // true
 console.log(replaceMultipleSpaces("This   is   TypeScript  ")); // This is TypeScript
 console.log(wordCount("Hello from TypeScript")); // 3
