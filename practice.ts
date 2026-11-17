// 1. print Hellow wordl

console.log('Hello World')

// 2. sum 10,20 = 30

function sum (a:number, b:number) : number {
    return a+b
};
console.log(sum(10,20));

// 3. Check Even or Odd - input -7

function evenOrOdd (a: number) : string {
    if (a % 2 == 0){
        return "Even"
    }
    return "odd"
}
console.log(evenOrOdd(10))

// 4. Larget of 2 numbers  25, 40

function findLarget (a: number, b: number) : number{
    if (a>b) {
        return a
    }
    return b
}
console.log(findLarget(25,40))
//type 2
function findL (a:number, b: number) : number {
    return a>b ?a:b
}
console.log(findL(110,20))

//5. Larget of 3 

//type 1

function Largest3(a: number,b:number,c:number) {
    let max = a
    if (b>max)max = b;
    if (c>b) max =c;
    return max 
}
console.log(Largest3(30,90,40))

// type 2

function Large (a: number,b:number,c:number) : number {
    return Math.max(a,b,c)
}
console.log(Large(120, 30,400));

//6. Reverse a string - string

function rverseString(a:string) :string {
    return a.split("").reverse().join("")
}
console.log(rverseString('string'))

//type 2 

function reversWord (a:string) : string {
    let result = "";
    for (let i = a.length -1; i>=0; i--){
        result += a[i]
    }
    return result
}
console.log(reversWord('flexcube'))

//7. check Palindrome

function checkpalindrome (a:string) : boolean{
    let result = a
    let reverse = a.split("").reverse().join("")
    return result == reverse
}
console.log(checkpalindrome('madam'))
console.log(checkpalindrome('man'))

//8. count vowels - typescript

function countVowels (str:string) : number {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes (char)) {
        count++
        }
    }
    return count
}
console.log(countVowels('asdwefewf'))


function voles(str: string) : number {
    let count = 0
    for (let char of str.toLowerCase()){
        if ('aeiou'.includes (char)){
            count ++
        }
    }
    return count;
}
console.log(voles('mam'))

//9. find the sum of array elemets - [10,20,30,40,60]

function sumOfArray (arr:number[]):number {
   let sum = 0
   for (let num of arr){
    sum+= num;
   }
   return sum
}
console.log(sumOfArray([10,20,30,40,60]))

//dummy

function bigWord (arr:string[]): string{
    let word = ""
    for(const w of arr){
        if(w.length>word.length){
        word = w
        }
    }
    return word;
}

console.log(bigWord(["dane", "hanan", "udnjima", "namikda"]))

// 10.find max element from array

function maxarr (num:number[]):number{
    let max = num[0]
    for (const n of num){
        if (n >=max){
            max =n
        }
    }
    return max;
}
console.log(maxarr([23,34,55,66]))