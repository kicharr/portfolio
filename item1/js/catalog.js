"use strict"

console.log('test');
// catalog wrapper

let catalogWrap = document.getElementById('catalog-cards__wrapper');

// поиск
const api = `https://gist.githubusercontent.com/VasilyMur
/43ef6df83bba694f871f11a16ed7556d/raw/
b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;


const stations = [];

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log('data >>>> ', data);

        data.forEach(line => {
            stations.push(...line.stations);
        });
    });

const searchInput = document.querySelector('.search-name__input');
const searchOptions = document.querySelector('.options');

function getOptions(word, stations) {

    return stations.filter(s => {
        // Определить совпадает ли то, что мы вбили в input
        // Нвазваниеям станциям внутри массива

        const regex = new RegExp(word, 'gi');
        return s.name.match(regex);
    })
}

function displayOptions() {
    const options = getOptions(this.value, stations);
    const html = options
        .map(stations => {

            const regex = new RegExp(this.value, 'gi');
            const stationName = stations.name.replace(regex,
                `<span class='hl'>${this.value}</span>`
            )

            return `<li><span>${stationName}<span></li>`
        })
        .slice(0, 2)
        .join('');

    searchOptions.innerHTML = this.value ? html:null;

    // console.log('options>>', options);
    // console.log('this.value>>', this.value);
}




searchInput.addEventListener('change', displayOptions);
searchInput.addEventListener('keyup', displayOptions);

// 