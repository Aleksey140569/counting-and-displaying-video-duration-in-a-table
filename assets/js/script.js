'use strict';

// Тестовые данные.

// Константы.

// Константы индификаторов для вывода ошибок.

const NAME_ERROR = "name-error";
const HOURS_ERROR = "hours-error";
const MINUTES_ERROR = "minutes-error";
const SECONDS_ERROR = "seconds-error";

// Константа инидификатора кнопки добавления записи в таблицу.

const ADD_RECORD = "add";

// Функции.

// События.

(function() {
  // Обработчик события "click" на конопке с id "add".

  // Помещаем элементы input в соответствующие константы.

  const elementName = document.getElementById(`${NAME_OF_VIDEO_FIELD}`);
  const elementHours = document.getElementById(`${HOURS_FIELD}`);
  const elementMinutes = document.getElementById(`${MINUTES_FIELD}`);
  const elementSeconds = document.getElementById(`${SECONDS_FIELD}`);

  document.getElementById(`${ADD_RECORD}`).addEventListener('click', function() {


  });
})();