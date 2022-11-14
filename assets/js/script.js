'use strict';

// Тестовые данные.

// Константы.

// Константы индификаторов полей формы.

const NAME_OF_VIDEO_FIELD = "name";
const HOURS_FIELD = "hours";
const MINUTES_FIELD = "minutes";
const SECONDS_FIELD = "seconds";

// Константы индификаторов для вывода ошибок.

const NAME_ERROR = "name-error";
const HOURS_ERROR = "hours-error";
const MINUTES_ERROR = "minutes-error";
const SECONDS_ERROR = "seconds-error";

// Константа инидификатора кнопки добавления записи в таблицу.

const ADD_RECORD = "add";

// Функции.

// Функция проверяет передаваеммую ей строку на нулевую длину.

function checkForEmptyLine(string) {
  let error = false;

  if (string.length === 0) {
    error = true;
  }

  return error;
}

/* Функция проверяет, есть ли в передаваемой строке какие-нибудь
другие символы, кроме цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. */

function checkNotANumber(string) {
  let error = false;

  const checkAllDigits = [... string];

  for (const item of checkAllDigits) {
    switch(item) {
      case '0':
        break;
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
      case '7':
        break;
      case '8':
        break;
      case '9':
        break;
      default:
        error = true;
    }
  }

  return error;
}

/* Функция проверяет введенное пользователем числовое значение,
  входит оно в определенный числовой диапазон или нет. */

function checkRange(string, start, end) {
  const number = Number(string);
  let error = false;

  if (number < start || number > end) {
    error = true;
  }

  return error;
}

// События.

(function() {
  // Обработчик события "click" на конопке с id "add".

  // Помещаем элементы input в соответствующие константы.

  const elementName = document.getElementById(`${NAME_OF_VIDEO_FIELD}`);
  const elementHours = document.getElementById(`${HOURS_FIELD}`);
  const elementMinutes = document.getElementById(`${MINUTES_FIELD}`);
  const elementSeconds = document.getElementById(`${SECONDS_FIELD}`);

  document.getElementById(`${ADD_RECORD}`).addEventListener('click', function() {

    /* Получаем данные из элемента input в виде строки и записываем их
    в соотвествующие переменные. Название типа nameAsString говорит,
    что данные имеют тип string */

    const nameAsString = elementName.value.trim();
    const hoursAsString = elementHours.value.trim();
    const minutesAsString = elementMinutes.value.trim();
    const secondsAsString = elementSeconds.value.trim();

    /* Помещаем элементы для сообщений об ошибках в соответ-
  ствующие константы. */

    const elementErrorName = document.getElementById(`${NAME_ERROR}`);
    const elementErrorHours = document.getElementById(`${HOURS_ERROR}`);
    const elementErrorMinutes = document.getElementById(`${MINUTES_ERROR}`);
    const elementErrorSeconds = document.getElementById(`${SECONDS_ERROR}`);

  });
})();