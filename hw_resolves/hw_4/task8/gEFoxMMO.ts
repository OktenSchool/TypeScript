// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

type Primitive = string | number | boolean;

// function primitivesUlCreator(arrayOfPrimitives: string[]|number[] | boolean[]) {
function primitivesUlCreator(arrayOfPrimitives: Primitive[]) {

    document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

primitivesUlCreator([1123, 123, 12, 312, 321, 3, 'asdads', true]);
