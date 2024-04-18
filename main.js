// завдання 1
let a = prompt("Виберіть: сік, кофе або чай");

switch (a) {
  case "кофе":
    alert("Ви обрали кофе");
    break;
  case "чай":
    alert("Ви обрали чай");
    break;
  case "сік":
    alert("Ви обрали сік");
    break;
  default:
    alert("Те що ви обрали нема в наявності");
}

// завдання 2
let b = prompt("Введіть день тижня");

switch (b) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пятниця":
    alert("це робочий день");
    break;
  case "субота":
  case "неділя":
    alert("Це вихідний день");
    break;
  default:
    alert("Ви ввели неправильно день тижня");
}

// завдання 3
let c = Number(prompt("Введіть номер місяця"));

switch (c) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Літо");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осінь");
    break;
  default:
    alert("Введіть правильний номер місяця");
}

// завдання 4
let d = Number(prompt("Введіть номер місяця"));

switch (d) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("В цьому місяці 31 день");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("В цьому місяці 30 днів");
    break;
  case 2:
    alert("В цьому місяці 29 днів");
    break;
  default:
    alert("Ви ввели неправельний номер місяця");
}

// завдання 5 
let e = prompt("Введіть кольор")

switch (e) {
    case "червоний":
        alert("Стоп!!!");
        break;
    case "жовтий":
        alert("Чекай");
        break;
    case "зелений":
        alert("Йди");
        break;
    default:
        alert("Ви вибрали неправильний кольор");
}
// завдання 6
function calculate(){
   let number1 = parseFloat(document.getElementById('number').value);
   let number2 = parseFloat(document.getElementById('number2').value);
   let operator = document.getElementById('operator').value;
   let result;

   if (operator === "/" && number2 === 0) {
    alert("Error! Division by zero is not allowed.");
    return;
   }

   switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "/": 
        result = number1 / number2;
        break;
    case "*": 
        result = number1 * number2;
        break;
     default:
        alert("Ви ввели не правильне значення");
        return;
   }

   document.getElementById('message').innerText = "Result: " + result;
}
