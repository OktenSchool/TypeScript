// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// @ts-ignore
const square = (aNum: number, bNum: number): number => {
    const result = aNum * bNum;
    console.log(result);
    return result;
}

console.log(square(10, 20));
