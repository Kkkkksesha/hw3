// Задание 1
function calculateVolumeAndArea(side) { //вводим функцию
    const V = side ** 3; //вводим переменные
    const S = 6 * (side ** 2);
    if (side > 0 && Number.isInteger(side)) { //ставим условия для вывода правильного ответа
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    }
    else {
        return `При вычислении произошла ошибка`;
    }
}

console.log(calculateVolumeAndArea(5)); //выводим ответ в консоль

// задание 2

function findCompartment(seat) { //вводим функцию

    if (seat >= 1 && seat <= 36 && Number.isInteger(seat)) { //ставим условия для вывода правильного ответа
        return Math.ceil(seat / 4);
    } else if (seat === 0 || seat > 36) {
        return `Таких мест в вагоне не существует`;
    } else {
        return `Ошибка. Проверьте правильность введенного номера места`;
    }
}

console.log(findCompartment(27)); //выводим ответ в консоль

// задание 3

var arr = [5, 10, 'Shopping', 20, 'Homework']; //вводим массив
for (var i = 0; i < arr.length; i++) { //вводим цикл "for"
    if (typeof (arr[i]) === 'number') { //ставим условия 
        arr[i] *= 2;
    } else if (typeof (arr[i]) === 'string') {
        arr[i] += ' - done';
    }
}
console.log(arr); //выводим массив в консоль

// задание 4
var data = [5, 10, 'Shopping', 20, 'Homework']; //вводим массив
var result = [];
for (var i = data.length - 1; i >= 0; i--) { //вводим цикл "for"
    result.push(data[i]);
}
console.log(result); //выводим массив в консоль

// задание 5

function showFamily(family) { //вводим функцию
    if (family.length === 0) { //ставим условия 
        return 'Семья пуста';
    } else {
        return 'Семья состоит из: ' + family.join(' ');
    }
}
var family = ['Peter', 'Ann', 'Alex', 'Linda'];  //вводим массив
var message = showFamily(family); //вводим переменную
console.log(message); //выводим ответ в консоль

// задание 6
// 6.1) В функции isOpen проблема в том, что она не принимает аргументы, чтобы проверить 
// время работы ресторана. Необходимо добавить аргументы hours и minutes и сравнить их с временем работы ресторана.

// 6.2) Функция isAverageLunchPriceTrue работает неправильно, потому что она сравнивает цены блюд среди себя,
//  но не учитывает их сумму. Необходимо изменить условие в функции, чтобы она сравнивала сумму цен двух блюд из меню с средним чеком.

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: 14,
        },
        {
            name: 'Pizza Diavola',
            price: 9,
        },
        {
            name: 'Beefsteak',
            price: 17,
        },
        {
            name: 'Napoleon',
            price: 7,
        },
    ],
    waitors: [
        { name: 'Alice', age: 22 },
        { name: 'John', age: 24 },
    ],
    averageLunchPrice: 20,
    openNow: true,
}

function isOpen(hours, minutes) {
    if ((hours > 9 && hours < 21) || (hours === 9 && minutes >= 30) || (hours === 21 && minutes === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isOpen(new Date().getHours(), new Date().getMinutes())); // Выведет true или false в зависимости от текущего времени

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (fDish.price + sDish.price <= average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(
    isAverageLunchPriceTrue(
        restorantData.menu[0],
        restorantData.menu[1],
        restorantData.averageLunchPrice
    )
)

// задание 7
let stars = '     *\n    ***\n   *****\n  *******\n *********\n***********';
console.log(stars);

