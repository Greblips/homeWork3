// Задача 1

const password = '11111';
const password2 = prompt('Введите пароль!');
const access = (password === password2) ? "Пароль введен верно": "Пароль введен неправильно";
alert(access);


// Задача 2

const c = prompt('Введите чиcло от 0 до 10');
const comparison = Number((c > 0 && c <= 10))? 'Верно': 'Неверно';
console.log(comparison);

// Задание 3

const d = 110;
const e = 10;

if (d > 100 || e > 100) {
    alert('Верно');3
} else {
    alert('Неверно');
}


// Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5


let monthNumber = prompt('Введите месяц');


switch (monthNumber) {
        case '1':
        case '2':
        case '3':
          alert( 'Зима' );
          break;
      
        case '4':
        case '5':
        case '6':
           alert( 'весна' );
           break;

        case '7':
        case '8':
        case '9':
            alert( 'лето' );
            break;

        case '10':
        case '11':
        case '12':
            alert( 'Осень' );
            break;
        default:
          alert( 'нет больше 12 месяцев' );
      }
