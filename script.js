"use strict";
var items1 = ['Колючая', 'Пушистая', 'Жидкая', 'Кубическая', 'Модульная', 'Непонятная'];
let msg = 'Буква должна быть';
$('#header')
    .html(msg + ' ');
$('#parametr')
    .click(function () {
    var item1 = items1[Math.floor(Math.random() * items1.length)];
    $('#button').html(item1);
});