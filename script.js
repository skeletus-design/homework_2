const student = "Воронин Никита Валерьевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;
//Расписание
const semestr1 = Array(16).fill([4,1,2,5,2,2,0]);
const exam1 = Array(1).fill([0,2,0,2,0,0,0]);
const freedom = Array(2).fill([0,0,0,0,0,0,0]);
const semestr2 = Array(23).fill([1,4,4,2,5,0,0]);
const exam2 = Array(1).fill([2,0,2,0,2,0,0]);
const array = [semestr1,exam1,freedom,semestr2,exam2];

//Переменные для расчетов
let weekN = 0; //Номер недели
let dayN = 0; //Номер дня
let allMoney = 0; //Стартовое количество денег

//Ввод данных

let xbox = +prompt('Стоимость приставки');
let bus = +prompt('Стоимость проезда в день');
let bussum = +prompt('Деньги на проезд');
let bfsum = +prompt('Деньги на обед');

//Счетчик дней и недель

for (let i = 0; i < array.length; i++) {
    let typeWeek = array[i]
    for (let j = 0; j < typeWeek.length; j++) {
        weekN = weekN + 1;
        console.log(`Неделя ${weekN}`);
        let week = typeWeek[j];
        for (let k = 0; k < week.length; k++) {
            dayN = dayN + 1;
            let lessons = week[k];
            console.log(lessons);
            if ((lessons > 0) && (lessons >= 3)) {
                console.log(`Откладываем и с дороги, и с обеда т.к. кол-во пар ${lessons}`);

                allMoney = allMoney + ((bussum-bus)+bfsum);// Подсчет с учетом денег на обед

                console.log(`Отложим ${((bussum-bus)+bfsum)} рублей. Отложено: ${allMoney} рублей`);
            } else if (lessons > 3) {
                console.log(`Откладываем только с дороги т.к. ${lessons} пар`);

                allMoney = allMoney + (bussum - bus);// Подсет денег с дороги

                console.log(`Отложим ${bussum - bus} рублей. Отложено: ${allMoney}`);
            } if (lessons = 0) {
                console.log(`Не откладываем. Пар нет.`);
            } if (allMoney >= xbox) {
                alert(`Накопили. Накоплено денег: ${allMoney} рублей. За ${dayN} дней.`);
            }
        }  
    } 
}
