// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// @ts-ignore
let s1: string = 'hello world';
console.log(s1.length);
let s2: string = 'lorem ipsum';
console.log(s2.length);
let s3: string = 'javascript is cool';
console.log(s3.length);


// @ts-ignore
const strings: string[] = [s1, s2, s3];
for (const s of strings) {
    console.log(s.length);

}

