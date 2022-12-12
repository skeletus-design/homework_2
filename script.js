const student = "Воронин Никита Валерьевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

//Ввод данных 
let xbox = prompt('Стоимость приставки');
let bus = prompt('Стоимость проезда в день');
let busSum = prompt('Деньги на дорогу');
let bfSum = prompt('Деньги на обед'); 
let semestrpay;
let day = 0;
let maxpay = busSum - bus + bfSum;
let lowpay = busSum - bus;

for(semestr1=0; semestr1===16; semestr++){
semestrpay = maxpay*4 + lowpay*2;
day += 7;
if(semestrpay >= xbox)break;
}
console.log(day);

//Массивы по неделям