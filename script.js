// Задача 1

const password = '11111';
const password2 = prompt('Введите пароль!');
alert = (password === password2) ? "Пароль введен верно": "Пароль введен неправильно";
alert(access);


 // Задача 2

const c = prompt('Введите чиcло от 0 до 10');
const comparison = Number((c > 0 && c < 10))? 'Верно': 'Неверно';
console.log(comparison);

 // Задание 3

const d = 110;
const e = 10;

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}


// // Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5


let monthNumber = prompt('Введите месяц');


switch (monthNumber) {
        case '12':
        case '1':
        case '2':
          alert( 'Зима' );
          break;
      
        case '3':
        case '4':
        case '5':
           alert( 'весна' );
           break;

        case '6':
        case '7':
        case '8':
            alert( 'лето' );
            break;

        case '9':
        case '10':
        case '11':
            alert( 'Осень' );
            break;
        default:
          alert( 'нет больше 12 месяцев' );
      }

//     //   Задание 6
//     https://github.com/Greblips/homeWork1/pull/3

    // Задание 7

     const checkOdd = prompt('Введите число')
     if( !isNaN(checkOdd) ){
      if( checkOdd % 2 === 0) alert(`Число ${checkOdd} четное`);
      else alert(`Число ${checkOdd} нечетное`)
     }
     else alert (`${checkOdd} -Это не число`)


   //   Задание 8

   let clientOS = prompt ('Ведите Операционную систему 0 — iOS, 1 — Android');
   if (clientOS == 0 || clientOS == 1){
      if (clientOS == 0) console.log("Установите версию приложения для iOS по ссылке")
      else console.log("Установите версию приложения для Android по ссылке")
   }
   else alert ("Ввели некорректные данные")

   // задание 9


   clientOS = prompt ('Ведите Операционную систему 0 — iOS, 1 — Android');
   let yearCreateTelephone =  prompt ('Год выпуска телефона');
   if ((clientOS == 0 || clientOS == 1) && !isNaN(yearCreateTelephone)){
      if (clientOS == 0 && yearCreateTelephone>=2015) console.log("Установите версию приложения для iOS по ссылке")
      else if (clientOS == 0 && yearCreateTelephone<=2015) console.log('Установите облегченную версию приложения для iOS по ссылке')
      else if (clientOS == 1 && yearCreateTelephone>=2015) console.log('Установите версию приложения для Android по ссылке')
      else if (clientOS == 1 && yearCreateTelephone<=2015) console.log('Установите облегченную версию приложения для Android по ссылке')
   }
   else alert ("Ввели некорректные данные")

