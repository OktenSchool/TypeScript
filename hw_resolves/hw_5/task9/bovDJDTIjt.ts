// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// @ts-ignore
type User49 = { id: number, name: string, age: number }
// @ts-ignore
const arrayDocPrinter = (users: User49[]): void => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

arrayDocPrinter([
    {id: 1, name: 'kokos', age: 123},
    {id: 2, name: 'kokos', age: 123},
    {id: 3, name: 'kokos', age: 123},
    {id: 4, name: 'kokos', age: 123},
    {id: 5, name: 'kokos', age: 123},
]);


