/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { dateBuilder, cToF } from './weather';

const api = {
  key: '4cc8a926413ba21a3774022235df5269',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const toggleSwitch = document.querySelector('[switch]');

export const setQuery = (evt) => {
  if (evt.keyCode === 13) {
    getResults(searchbox.value);
  }
};

const getResults = async (query) => {
  await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => weather.json()).then(displayResults);
};

const displayResults = (weather) => {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      setTimeout(() => {
        const tempCurrent = cToF(weather.main.temp);
        const tempMin = cToF(weather.main.temp_min);
        const tempMax = cToF(weather.main.temp_max);
        temp.innerHTML = `${Math.round(tempCurrent)}<span>°F</span>`;
        hilow.innerText = `${Math.round(tempMin)}°F / ${Math.round(tempMax)}°F`;
      }, 150);
    } else {
      setTimeout(() => {
        const tempCurrent = weather.main.temp;
        const tempMin = weather.main.temp_min;
        const tempMax = weather.main.temp_max;
        temp.innerHTML = `${Math.round(tempCurrent)}<span>°C</span>`;
        hilow.innerText = `${Math.round(tempMin)}°C / ${Math.round(tempMax)}°C`;
      }, 150);
    }
  });
};

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
