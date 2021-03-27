// Integers array

const array = [1,2,3,4,5,6,7,8,9,10];

// 1 sum of odd num
function sumOfodd(sum,num) {
    if(num % 2 !== 0){
        sum = sum + num;
    }
    return sum;
}

console.log('Sum of Odd Numbers ::',array.reduce(sumOfodd,0));

// 2 sum off odd indices

const sumOfOddInd = (acc, cur, index) => {
    if(index % 2 !== 0) {
        acc += cur
    }
    return acc
}

console.log('Sum of Odd indeces ::',array.reduce(sumOfOddInd,0));

// 3 biggest num in array 

const bigNumodArr = (acc, curr) => acc > curr ? acc:curr;
console.log('biggest Num in array',array.reduce(bigNumodArr,0)); 

// add 1 to to odd numbers, substract 1 from even numbers

const oddINCevenDEC = (curr) => {
    if (curr % 2 === 0) {
        return curr-= 1;
    }
    return curr += 1;
}
console.log(array.map(oddINCevenDEC));

//  Object odd sum & even sum
const OddSumEvenSum = (acc,curr) => curr % 2 === 0 ? {...acc, even:acc.even + curr} : {...acc, odd:acc.odd + curr};
console.log(array.reduce(OddSumEvenSum , {odd:0,even:0}));


// array od f string 
const StringArray = ['Apple' , 'Banana' , 'Orange' , 'Watermelon'];


//  Number od string , similar number of characters

function SimilarLength (arr) {
    return arr.reduce((obj,string) => {
        if([string.lenght] in obj) {
            return {...obj , [string.lenght]: obj[string.lenght] + 1};
        } else return {...obj, [string.lenght]: 1}
    },{});
}
console.log(SimilarLength(StringArray));

// string which have vowel

const vovel = (curr) => curr.match(/[aeiou]/g);
console.log(StringArray.filter(vovel));

// string key and string lenght

const KeyValue = StringArray.reduce((acc, curr) => {
    return [...acc, {
        [curr]: curr.length
    }];
}, []);

console.log(KeyValue);

// Currying 

const myName = (userName) => (sentence) => console.log("user ::",userName,sentence);
console.log(myName("hello ")("Omkar"));