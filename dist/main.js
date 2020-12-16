/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("/* eslint-disable no-use-before-define */\nconst api = {\n  key: '4cc8a926413ba21a3774022235df5269',\n  base: 'https://api.openweathermap.org/data/2.5/',\n};\n\nconst searchbox = document.querySelector('.search-box');\nsearchbox.addEventListener('keypress', setQuery);\n\nfunction setQuery(evt) {\n  if (evt.keyCode === 13) {\n    getResults(searchbox.value);\n  }\n}\n\nasync function getResults(query) {\n  await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)\n    .then(weather => weather.json()).then(displayResults);\n}\n\nfunction displayResults(weather) {\n  const city = document.querySelector('.location .city');\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\n\n  const now = new Date();\n  const date = document.querySelector('.location .date');\n  date.innerText = dateBuilder(now);\n\n  const temp = document.querySelector('.current .temp');\n  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;\n\n  const weatherEl = document.querySelector('.current .weather');\n  weatherEl.innerText = weather.weather[0].main;\n\n  const hilow = document.querySelector('.hi-low');\n  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;\n}\n\nfunction dateBuilder(d) {\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const day = days[d.getDay()];\n  const date = d.getDate();\n  const month = months[d.getMonth()];\n  const year = d.getFullYear();\n  return `${day} ${date} ${month} ${year}`;\n}\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;