// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


interface IUserTask1_4 {
    name: string;
    username: string;
    password: string;
}

let user4: IUserTask1_4 = {name: 'asdas1', username: 'asd', password: '1234'};
let user5: IUserTask1_4 = {name: 'asdas1', username: 'asd', password: '1234'};
let user6: IUserTask1_4 = {name: 'asdas1', username: 'asd', password: '1234'};

let users_task_1_4: IUserTask1_4[] = [
    user4,
    {name: 'asdas2', username: 'qwe', password: '1234'},
    user5,
    {name: 'asdas3', username: 'dfg', password: '1234'},
    user6,
    {name: 'asdas1', username: 'asd', password: '1234'}
];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);


