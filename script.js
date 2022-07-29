var n=1;
var idCount=0;
var myTable = document.getElementById('myTable');
var tableBody = document.getElementById("tableBody");
var bodyRows = document.querySelector('.body_rows');


/*Добавление строки*/
function addRow() {
    n++;
    const forms_count = document.getElementById('all_forms');
    forms_count.textContent = 'Всего форм: ' + n;   /*Счетчик строк*/

    const newRow = document.createElement('tr');
    newRow.innerHTML = bodyRows.innerHTML;  /*Создаем строку аналогичную первой*/

    idCount++;
    newRow.id = bodyRows.id + idCount;  /*Обновление id для новой строки*/

    tableBody.appendChild(newRow);  /*Вставляем строку в таблицу*/
}

/*Удаление строки*/
function delRow(e) {
    n--;
    const forms_count = document.getElementById('all_forms');
    forms_count.textContent = 'Всего форм: ' + n;   /*Счетчик строк*/

    e.closest('tr').remove(e);  /*Обращаемся к строке и удаляем ту строку, в которой находится конкретная кнопка*/
}

/*Клонирование*/
function update(val){   /*Изменение значения у Select*/
    val.options[val.selectedIndex].setAttribute("selected","");
}
function cloneRow(e) {
    n++;
    const forms_count = document.getElementById('all_forms');
    forms_count.textContent = 'Всего форм: ' + n;   /*Счетчик строк*/

    var clonesRow = e.closest('tr').cloneNode(true);    /*Обращаемся к строке с конкреткой кнопкой и создаем ее клон (true - дочерние элементы также клонируются)*/
    tableBody.appendChild(clonesRow);   /*Вставляем строку в таблицу*/

    idCount++;
    var rowBeforeClones = e.closest('tr');
    clonesRow.id = rowBeforeClones.id + "0" + idCount;  /*Обновление id для новой строки*/
}

/*Счетчик строк*/
const forms_count = document.getElementById('all_forms');
forms_count.textContent = 'Всего форм: ' + n;

/*Чекбоксы*/

var inputCheck = document.getElementsByClassName("checkOfTechnology");

for (var i = 0; i < inputCheck.length; i++)
inputCheck[i].onchange = checkboxChecked;

function checkboxChecked(e) {
    for (var i = 0; i < inputCheck.length; i++) {
        if (inputCheck[i].checked && inputCheck[i] !== this) {
            inputCheck[i].checked = false;
        }
    }
}