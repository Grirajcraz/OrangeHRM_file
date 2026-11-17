function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2, 5))

function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } return "odd"
}
console.log(checkEvenOrOdd(1992))

function largestNumber(a: number, b: number): number {
    return a > b ? a : b
}
console.log(largestNumber(10, 29))

function maxArray(arr: number[]): number {
    let max = arr[0]
    for (const num of arr) {
        if (num > max) {
            max = num
        }
    }
    return max
}
console.log(maxArray([100, 300, 297]))

function ana(a: string, b: string, c: string): boolean {
    const aa = a.split("").sort().join("")
    const bb = b.split("").sort().join("")
    const cc = c.split("").sort().join("")
    return aa === bb && bb === cc;
}
console.log(ana("nam", 'man', 'anm'))

function sortAlpha(str: string): string {
    return str.split("").sort().join("")
}
console.log(sortAlpha("qwertyui"))


function vowles(str: string): number {
    let count = 0
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++
        }
    }
    return count;
}
console.log(vowles('raja'))

function arrsum(arr: number[]): number {
    let sum = 0
    for (let num of arr) {
        sum += num;
    }
    return sum
}
console.log(arrsum([20, 30, 40]))

function minArr(arr: number[]): number {
    let min = arr[0]
    for (let num of arr) {
        if (num < min) {
            min = num
        }
    }
    return min;
}
console.log(minArr([90, 87, 34, 15, 67]))

function maxArr(arr: number[]): number {
    let max = arr[0]
    for (let num of arr) {
        if (num > max)
            max = num
    }
    return max
}
console.log(maxArr([90, 87, 34, 15, 67]))

function evenArr(arr: number[]): number {
    let count = 0
    for (let num of arr) {
        if (num % 2 == 0) {
            count++
        }
    } return count;
}
console.log(evenArr([10, 20, 30, 40, 33]))

function removeDuplicate(arr: number[]): number[] {
    return [...new Set(arr)]
}
console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]))

//promise

const pros = new Promise<string>((resolve, reject) => {
    const ok = true
    if (ok) resolve('sucess')
    else reject('failure')
});

pros.then(result => console.log(result))
pros.catch(err => console.error(err))
pros.finally(() => console.log('Done'))

import { test, expect } from '@playwright/test'

test('Testing practice', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const buttons = page.getByRole('button', {
        name: 'Submit'
    });
    console.log(await buttons.count());

})

