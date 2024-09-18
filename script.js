// script.js

// Багатовимірний масив студентів
const students = [
    ["Приступа", "Данило", 18, "Запоріжжя", "+380123456789"],
    ["Луговський", "Артем", 18, "Запоріжжя", "+380987654321"],
    ["Цимбал", "Олег", 18, "Запоріжжя", "+380567890123"],
    ["Цимбал", "Артем", 18, "Запоріжжя", "+380123123123"],
    ["Юсюк", "Анжеліка", 18, "Запоріжжя", "+380456789012"],
    ["Панченко", "Ігор", 18, "Запоріжжя", "+380321321321"]
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
