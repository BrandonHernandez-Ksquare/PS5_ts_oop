"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
[];
//create const for the three buttons
const dailyB = document.querySelector("#Daily");
const weeklyB = document.querySelector("#Weekly");
const monthlyB = document.querySelector("#Monthly");
//A const with the fetch request
const request = fetch('https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json');
//set the initial state of the web 
const initial = function initialState(resp) {
    for (let index = 0; index < resp.length; index++) {
        document.querySelector(`.title${index}`).innerHTML = resp[index].title; // the titles of the cards
        document.querySelector(`.current${index}`).innerHTML = '- Hrs';
        document.querySelector(`.previous${index}`).innerHTML = '-';
    }
};
request
    .then((resp) => resp.json()) // make the request
    .then((resp) => {
    if (!resp) {
        throw 'An error has ocurred, please try again later!'; // if no data has been found then we throw an error
    }
    ;
    initial(resp); // we display the initial state of the information
    //According to the button then we show the information
    //we iterate the json and in each position and we write the information obtained in the html
    dailyB.addEventListener("click", () => {
        for (let index = 0; index < resp.length; index++) {
            document.querySelector(`.current${index}`).innerHTML = resp[index].timeframes.daily.current + 'Hrs';
            document.querySelector(`.previous${index}`).innerHTML = resp[index].timeframes.daily.previous;
        }
    });
    weeklyB.addEventListener("click", () => {
        for (let index = 0; index < resp.length; index++) {
            document.querySelector(`.current${index}`).innerHTML = resp[index].timeframes.weekly.current + 'Hrs';
            document.querySelector(`.previous${index}`).innerHTML = resp[index].timeframes.weekly.previous;
        }
    });
    monthlyB.addEventListener("click", () => {
        for (let index = 0; index < resp.length; index++) {
            document.querySelector(`.current${index}`).innerHTML = resp[index].timeframes.monthly.current + 'Hrs';
            document.querySelector(`.previous${index}`).innerHTML = resp[index].timeframes.monthly.previous;
        }
    });
})
    .catch((err) => {
    alert('An error has ocurred, please try again later!'); // when we catch the error then we seen an alert to the browser
});
