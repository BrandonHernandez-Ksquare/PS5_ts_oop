"use strict";
const dailyB = document.querySelector("#Daily");
const weeklyB = document.querySelector("#Weekly");
const monthlyB = document.querySelector("#Monthly");
const request = fetch('https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json');
const initial = function initialState(resp) {
    for (let index = 0; index < resp.length; index++) {
        document.querySelector(`.title${index}`).innerHTML = resp[index].title;
        document.querySelector(`.current${index}`).innerHTML = '- Hrs';
        document.querySelector(`.previous${index}`).innerHTML = '-';
    }
};
request
    .then((resp) => resp.json())
    .then((resp) => {
    if (!resp) {
        throw 'An error has ocurred, please try again later!';
    }
    ;
    initial(resp);
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
    alert('An error has ocurred, please try again later!');
});
export {};
