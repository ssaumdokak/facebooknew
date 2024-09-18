// script.js

// Багатовимірний масив студентів
const students = [
    ["Андрієнко", "Олексій", 20, "Київ", "+380123456789"],
    ["Петренко", "Марія", 21, "Львів", "+380987654321"],
    ["Коваленко", "Іван", 19, "Одеса", "+380567890123"],
    ["Шевченко", "Анна", 22, "Харків", "+380123123123"],
    ["Мельник", "Володимир", 20, "Полтава", "+380456789012"],
    ["Кравченко", "Ірина", 23, "Дніпро", "+380321321321"]
];

// Функція для заповнення таблиці
function fillStudentTable() {
    const tableBody = document.getElementById("studentTable");

    students.forEach(student => {
        const row = document.createElement("tr");
        student.forEach(data => {
            const cell = document.createElement("td");
            cell.textContent = data;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Виклик функції для заповнення таблиці при завантаженні сторінки
window.onload = fillStudentTable;

// Код для налаштувань меню і темної теми
var settingsMenu = document.querySelector(".setting_menu");
var darkBtn = document.getElementById("dark_btn");

function settingsMenuToggle() {
    settingsMenu.classList.toggle("setting_menu_height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark_btn_on");
}

// Код для кнопки отримання значення і посту
let btnGet = document.querySelector('#button_value');
let inputGet = document.querySelector('#input_value');
let post = document.querySelector('#post');

btnGet.addEventListener('click', () => {
    post.innerText = inputGet.value;
});
