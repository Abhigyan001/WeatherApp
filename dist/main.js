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
eval("const api = {\r\n  key: \"4cc8a926413ba21a3774022235df5269\",\r\n  base: \"https://api.openweathermap.org/data/2.5/\"\r\n}\r\n\r\nconst searchbox = document.querySelector('.search-box');\r\nsearchbox.addEventListener('keypress', setQuery);\r\n\r\nfunction setQuery(evt) {\r\n  if (evt.keyCode == 13) {\r\n    getResults(searchbox.value);\r\n  }\r\n}\r\n\r\nfunction getResults (query) {\r\n  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)\r\n    .then(weather => {\r\n      return weather.json();\r\n    }).then(displayResults);\r\n}\r\n\r\nfunction displayResults (weather) {\r\n  let city = document.querySelector('.location .city');\r\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\r\n\r\n  let now = new Date();\r\n  let date = document.querySelector('.location .date');\r\n  date.innerText = dateBuilder(now);\r\n\r\n  let temp = document.querySelector('.current .temp');\r\n  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;\r\n\r\n  let weather_el = document.querySelector('.current .weather');\r\n  weather_el.innerText = weather.weather[0].main;\r\n\r\n  let hilow = document.querySelector('.hi-low');\r\n  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;\r\n}\r\n\r\nfunction dateBuilder (d) {\r\n  const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\r\n  const days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n  let day = days[d.getDay()];\r\n  let date = d.getDate();\r\n  let month = months[d.getMonth()];\r\n  let year = d.getFullYear();\r\n  return `${day} ${date} ${month} ${year}`;\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;