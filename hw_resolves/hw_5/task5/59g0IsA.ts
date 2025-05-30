// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// @ts-ignore
const paragraphCreator = (text: string): void => {
    document.write(`<p>${text}</p>`);
}

paragraphCreator('okten');
paragraphCreator('okten1');
paragraphCreator('okten2');
paragraphCreator('okten3');
