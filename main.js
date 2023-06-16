var phrases = [ // Пишем сами цитаты
    [
        "Изометил натрия - это изометил натрия"
    ],

    [
        "Тише едешь - дальше... Не иди, всё равно ты уже опоздал"
    ],

    [
        "Импотенция - она как опыт, преобретается с годами"
    ]
];

document.getElementById("next-quote").addEventListener("click", function() {
   

    var quote = phrases[ Math.floor( Math.random() * phrases.length ) ];
    // С помощью функции выбираем любой элемент из массива

    // Выводим фразу
    var phrase = document.querySelector("#phrase");
   

    phrase.innerHTML = quote[0];
});