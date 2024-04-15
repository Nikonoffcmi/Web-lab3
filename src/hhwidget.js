import axios from 'axios';

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('findButton');
    const input = document.getElementById('searchInput');
    if (button) {
    button.addEventListener('click', function() {
        requestVacancies();
    });}
    else {
        console.error('Кнопка поиска не найдена.');
    }
    if (input) {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("findButton").click();
        }
        });}
    else {
        console.error('Ошибка при нажатии enter.');
    }
});


export function requestVacancies(){
    let searchText = document.getElementById("searchInput").value;
    axios.get(`https://api.hh.ru/vacancies?text=${searchText}`)
    .then((response) => {
        const data = response.data;
        ShowData(data);
    })
    .catch((error) => {
        console.error('Ошибка при загрузке данных о вакансии:', error);
    })
}

export function createCard(cardData) {
    var card = document.createElement("div");
    card.classList.add("card");
    let salaryMessage;
    salaryMessage = cardData.salary && cardData.salary.from ? 
    "Зарплата от " + cardData.salary.from + " " + cardData.salary.currency: 
    "Требуется уточнение по зарплате";
    
    card.innerHTML = `
        <h2>${cardData.name}</h2>
        <p>${salaryMessage}</p>
        <a href="${cardData.alternate_url}" target="_blank">Подробнее</a>
    `;

    return card;
}

export function ShowData(data){
    let items = data.items;

    var dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";
    
    items.forEach(function(item) {
        var card = createCard(item);
        dataContainer.appendChild(card);
    })
}