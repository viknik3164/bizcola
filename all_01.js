"use strict"; // современный режим работы JS-кода
// let typeValues = prompt("string or number", "..."); // "модальное окно" со строкой для ввода
// alert(typeValues);
// let age = confirm(`ТЕКСТ или ЧИСЛО ${58}`); // "модальное окно" без строки для ввода
// alert(`${age}`);
// Преоброзование типов:
// let value = true;
// alert(typeof value); // boolean
// value = String(value); //теперь value это строка"true"
// alert(typeof value); // string
// alert("6" / "2"); строки в число
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // становится числом 123
// alert(typeof num); // number
// let age = Number("Любая строка вместо числа");
// alert(age); // NaN, преобразование не удалось

// Операторы инкременты"++" (++префиксные) / дикременты"--" (пофиксные--)
// let counter = 1;
// let a = ++counter; // префиксный "++"
// alert(a); // 2

// let counter = 1;
// let a = counter++; // пофиксный "++"
// alert(a); // возвращает 1

// let counter = 1;
// counter++; // пофиксный "++"
// // ++counter; // префиксный "++"
// alert(counter); // возвращает 2

// let year = prompt(
//   "В каком году была опубликована спецификация ECMAScript-2015?",
//   ""
// );
// if (year == 2015) {
//   alert("Вы такой умный!");
//   alert("Правильно!");
// } else {
//   alert("А вот и неправильно!");
// }

// let year = prompt(
//   "В каком году была опубликована спецификация ECMAScript-2015?",
//   ""
// );
// if (year < 2015) {
//   alert("Это слишком рано...");
// } else if (year > 2015) {
//   alert("Это поздновато");
// } else {
//   alert("Верно!");
// }

// let accessAllowed;
// let age = prompt("Сколько вам лет?", "");
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);
// let accessAllowed = age > 18 ;

// let age = prompt("Возраст?", 18);
// let message = age < 3 ? "Здравствуй, малыш!":
//   age < 18 ? "Привет!":
//   age < 100 ? "Здравствуйте!" : "Какой необычный возраст!";
// alert(message);

// if (age < 3) {
//   message = "Здравствуй, малыш!";
// } else if (age < 18) {
//   message = "Привет!";
// } else if (age < 100) {
//   message = "Здравствуйте!";
// } else {
//   message = "Какой необычный возраст!";
// }
// alert(message);

// let value = prompt(`Какое офицыальное название JS?`,"");
// if (value=="ECMOScript") {
// 	alert(`Верно!`);
// } else { alert(`Не знаете? ECMAScript!`);
// }

// let value = prompt(`Введите число`,"");
// if (value > 0) {
// 	alert(`Верно`);
// } else if (value == 0) {
// 	alert(`Возможно,но ...`);
// } else if (value < 0) {
// 	alert(`false`);
// }

// let message;
// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// } // оналогичный код
// let message = login == "Сотрудник" ? "Привет" : 
//     login == "Директор" ? "Здравствуйте" : 
// 		login == "" ? "Нет логина" : 

// Логические операторы:
// let userName = prompt("Кто там?", "");
// if (userName === "Админ") {
//   let pass = prompt("Пароль?", "");
//   if (pass === "Я главный") {
//     alert("Здравствуйте!");
//   } else if (pass === "" || pass === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (userName === "" || userName === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }
