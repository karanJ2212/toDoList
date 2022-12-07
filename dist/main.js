/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([
  ["main"],
  {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval(
          '//import "./style.css";\r\nclass UI {\r\n  static displayTask() {\r\n    const task = [\r\n      {\r\n        desc: "buy fruits",\r\n        id: 1,\r\n      },\r\n      {\r\n        desc: "buy medicines",\r\n        id: 1,\r\n      },\r\n      {\r\n        desc: "buy household",\r\n        id: 1,\r\n      },\r\n    ];\r\n\r\n    task.forEach((works) => UI.addTasks(works));\r\n  }\r\n\r\n  static addTasks(works) {\r\n    const list = document.querySelector(".list");\r\n    let html = ` <li class="listItems">\r\n    <input type="checkbox" name="select" id="" />\r\n    <p class="title">${works.desc}</p>\r\n    <button class="button remove" id="${works.id}">Remove</button>\r\n  </li>`;\r\n    list.insertAdjacentHTML("beforeend", html);\r\n  }\r\n}\r\n\r\n//events\r\ndocument.addEventListener("DOMContentLoaded", UI.displayTask());\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    // eslint-disable-next-line no-undef, no-unused-vars
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
