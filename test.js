<script>
// Проверял на https://js.do/ , библиотека math не подключена, ее функции расписаны вручную
// Иванов Н.С.

var invoice = 
{
"customer": "MDT",
"performance": [
{
"playId": "Гамлет",
"audience": 55,
"type": "tragedy"
},
{
"playId": "Ромео и Джульетта",
"audience": 35,
"type": "tragedy"
},
{
"playId": "Отелло",
"audience": 40,
"type": "comedy"
}
]
};

function statement(invoice) {
    let totalAudience = 0;
    let streak = 0;
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = 'Счет для ' + invoice.customer + '<br/>';
    
    for (i=0;i < invoice.performance.length; i++) {
    const play = invoice.performance[i];
    totalAudience += play.audience;
    let thisAmount = 0;
    switch (play.type) {
    case "tragedy":
    thisAmount = 40000;
    if (play.audience > 30) {
    thisAmount += 1000 * (play.audience - 30);
    }
    break;
    case "comedy":
    thisAmount = 30000;
    if (play.audience > 20) {
    thisAmount += 10000 + 500 * (play.audience - 20);
    }
    thisAmount += 300 * play.audience;
    break;
    default:
    throw new Error('неизвестный тип: ${play.type}');
    }
    // Добавление бонусов
    // функция max расписана для проверки в онлайн редакторе
    if (play.audience > 30)  volumeCredits += play.audience;
    // Дополнительный бонус за каждые 10 комедий
    if (play.type == "comedy") {
    streak +=1;
    // +1 бонус за каждые 10 комедий, сколько закладывалось в исходной логике не ясно
    // math.floor изменена для проверки в онлайн редакторе
    if (streak%10 == 0 && streak > 0) volumeCredits += 1;
    }
    
    totalAmount += thisAmount;
    }
    // Вывод счета
    result += 'Всего ' + totalAudience + ' зрителей  <br>';
    result += 'Итого с вас ' + totalAmount/100 + ' RUB <br>';
    result += 'Вы заработали ' + volumeCredits + ' бонусов';
        document.write(result);        
        return result;
}
statement(invoice);
</script>
