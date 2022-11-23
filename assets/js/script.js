'use strict';

// Тестовые данные.

// Константы.

// Сообщения об ошибках.

const EMPTY_STRING = 'Данное поле не может быть пустым.';
const NOT_A_NUMBER = 'В данное поле необходимо ввести 0 или целое число больше 0.';
const OUT_OF_RANGE = 'В данное поле необходимо ввести 0 или целое число не больше 59.';

// Правила валидации.

const VALIDATION_RULES_FOR_NAME = [true, false, false, undefined, undefined];
const VALIDATION_RULES_FOR_HOURS = [true, true, false, undefined, undefined];
const VALIDATION_RULES_FOR_MINUTES = [true, true, true, 0, 59];
const VALIDATION_RULES_FOR_SECONDS = [true, true, true, 0, 59];

// Константы классов для элементов типа input.

const ACCEPT_VALUE = "accept";
const DO_NOT_ACCEPT_VALUE = "error";

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

function checkForEmptyLine(string)
{
  let error = false;

  if (string.length === 0) {
    error = true;
  }

  return error;
}

/* Функция проверяет, есть ли в передаваемой строке какие-нибудь
другие символы, кроме цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. */

function checkNotANumber(string)
{
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

function checkRange(string, start, end)
{
  const number = Number(string);
  let error = false;

  if (number < start || number > end) {
    error = true;
  }

  return error;
}

// Функция проверки правильности введенных данных.

function checkData(string, func)
{
  return func(string);
}

// Функция валидации данных из формы

function validateFormData(string, emptyLine, notANumber, range, start, end)
{
  let errors = [];
  let errorEmptyLine = false;
  let errorNotANumber = false;
  let errorRange = false;

  if (emptyLine) {
    errorEmptyLine = checkData(string, checkForEmptyLine);

    if (errorEmptyLine) {
      errors.push(true);
      errors.push(`${EMPTY_STRING}`);
    }
  }

  if (notANumber) {
    errorNotANumber = checkData(string, checkNotANumber);

    if (errorNotANumber) {
      if (errors.length === 0) {
        errors.push(true);
        errors.push(`${NOT_A_NUMBER}`);
      } else {
        errors[1] = `${NOT_A_NUMBER}`;
      }
    }
  }

  if (range) {
    errorRange = checkData(string, checkRange
      .bind(
        checkRange,
        string,
        start,
        end
      )
    );

    if (errorRange) {
      if (errors.length === 0) {
        errors.push(true);
        errors.push(`${OUT_OF_RANGE}`);
      } else {
        errors[1] = `${OUT_OF_RANGE}`;
      }
    }
  }

  return errors;
}

// События.

(function() {

  // Объявляем массив, в котором будем хранить всю необходимую для
  // построения таблицы информацию.

  let mainArray = summary;

  // Помещаем элементы input в соответствующие константы.

  const elementName = document.getElementById(`${NAME_OF_VIDEO_FIELD}`);
  const elementHours = document.getElementById(`${HOURS_FIELD}`);
  const elementMinutes = document.getElementById(`${MINUTES_FIELD}`);
  const elementSeconds = document.getElementById(`${SECONDS_FIELD}`);

  /* Помещаем элементы для сообщений об ошибках в соответ-
  ствующие константы. */

  const elementErrorName = document.getElementById(`${NAME_ERROR}`);
  const elementErrorHours = document.getElementById(`${HOURS_ERROR}`);
  const elementErrorMinutes = document.getElementById(`${MINUTES_ERROR}`);
  const elementErrorSeconds = document.getElementById(`${SECONDS_ERROR}`);

  document.getElementById(`${ADD_RECORD}`).addEventListener('click', function() {

    /* Получаем данные из элемента input в виде строки и записываем их
    в соотвествующие переменные. Название типа nameAsString говорит,
    что данные имеют тип string */

    const nameAsString = elementName.value.trim();
    const hoursAsString = elementHours.value.trim();
    const minutesAsString = elementMinutes.value.trim();
    const secondsAsString = elementSeconds.value.trim();

    // Переменные для храния наличия ошибок в введенных 
    // пользоватем значений.

    let arrayErrorsName;
    let arrayErrorsHours;
    let arrayErrorsMinutes;
    let arrayErrorsSeconds;

	arrayErrorsName = [];
    arrayErrorsHours = [];
    arrayErrorsMinutes = [];
    arrayErrorsSeconds = [];

	// Делаем проверку полей формы на корректность введенных значений.

    // Валидируем поле name.

    arrayErrorsName = validateFormData(nameAsString, ... VALIDATION_RULES_FOR_NAME);

    // Валидируем поле hours.

    arrayErrorsHours = validateFormData(hoursAsString, ... VALIDATION_RULES_FOR_HOURS);

    // Валидируем поле minutes.

    arrayErrorsMinutes = validateFormData(minutesAsString, ... VALIDATION_RULES_FOR_MINUTES);

    // Валидируем поле minutes.

    arrayErrorsSeconds = validateFormData(secondsAsString, ... VALIDATION_RULES_FOR_SECONDS);

	/* Если пользователь ввел в поле допустимое значение меняем 
    его стиль, чтоб дать понять пользователю, что данное поле он 
    заполнил правильно, если нет меняем стили у неверно заполненых
    элементов и даем ему подсказку, что он сделал не так. Если же
    все поля заполнены правильно, то присваиваем переменным name, 
    hours, minutes и seconds введенные пользователем значения */

    let nameOfVideo, hours, minutes, seconds;

	if (arrayErrorsName.length === 0
      && arrayErrorsHours.length === 0
      && arrayErrorsMinutes.length === 0
      && arrayErrorsSeconds.length === 0) {

      /* Все поля заполнены правильно, поэтому присваиваем 
      значения полей переменным. */

      nameOfVideo = nameAsString;
      hours = Number(hoursAsString);
      minutes = Number(minutesAsString);
      seconds = Number(secondsAsString);

      /* Так как мы не знаем какие классы были добавлены к полям 
       ранее, очищаем список классов у полей. */

      if (elementName.classList.contains(`${ACCEPT_VALUE}`)) {
        elementName.classList.remove(`${ACCEPT_VALUE}`);
      }

      if (elementName.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
        elementName.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
      }

      if (elementHours.classList.contains(`${ACCEPT_VALUE}`)) {
        elementHours.classList.remove(`${ACCEPT_VALUE}`);
      }

      if (elementHours.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
        elementHours.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
      }

      if (elementMinutes.classList.contains(`${ACCEPT_VALUE}`)) {
        elementMinutes.classList.remove(`${ACCEPT_VALUE}`);
      }

      if (elementMinutes.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
        elementMinutes.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
      }

      if (elementSeconds.classList.contains(`${ACCEPT_VALUE}`)) {
        elementSeconds.classList.remove(`${ACCEPT_VALUE}`);
      }

      if (elementSeconds.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
        elementSeconds.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
      }

      /* Так как мы не знаем вводил ли до этого пользователь 
      недопустимые значения в поля или нет, мы очищаем все 
      сообщения об ошибках. */

      elementErrorName.innerHTML = "";
      elementErrorHours.innerHTML = "";
      elementErrorMinutes.innerHTML = "";
      elementErrorSeconds.innerHTML = "";

      /* И в заключении мы заменяем на пустую строку все значения, 
      которые пользователь ввел. */

      elementName.value = "";
      elementHours.value = "";
      elementMinutes.value = "";
      elementSeconds.value = "";

      let internalArray = [];

      internalArray.push(nameOfVideo);

      let timeAsString = convertTimeToString(hours, minutes, seconds);

      internalArray.push(timeAsString);

      totalVideoDuration = totalVideoDuration + convertTimeToSeconds(hours, minutes, seconds);

      let totalTimeAsString = convertSecondsToTime(totalVideoDuration);

      internalArray.push(totalTimeAsString);

      mainArray.push(internalArray);

      displayTable(mainArray, tbody);

    } else {

      /* Задаем стилевое оформление поля name, в зависимости 
      от корректности введенного пользователем значения. */

      if (arrayErrorsName.length === 0) {
        elementName.classList = "";
        elementName.classList.add(`${ACCEPT_VALUE}`);
        elementErrorName.innerHTML = "";
      } else {
        elementName.classList = "";
        elementName.classList.add(`${DO_NOT_ACCEPT_VALUE}`);
        elementErrorName.innerHTML = arrayErrorsName[1];
      }

      /* Задаем стилевое оформление поля hours, в зависимости 
      от корректности введенного пользователем значения. */

      if (arrayErrorsHours.length === 0) {
        if (elementHours.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
          elementHours.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
        }

        elementHours.classList.add(`${ACCEPT_VALUE}`);
        elementErrorHours.innerHTML = "";
      } else {
        if (elementHours.classList.contains(`${ACCEPT_VALUE}`)) {
          elementHours.classList.remove(`${ACCEPT_VALUE}`);
        }

        elementHours.classList.add(`${DO_NOT_ACCEPT_VALUE}`);
        elementErrorHours.innerHTML = arrayErrorsHours[1];
      }

      /* Задаем стилевое оформление поля minutes, в зависимости 
      от корректности введенного пользователем значения. */

      if (arrayErrorsMinutes.length === 0) {
        if (elementMinutes.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
          elementMinutes.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
        }

        elementMinutes.classList.add(`${ACCEPT_VALUE}`);
        elementErrorMinutes.innerHTML = "";
      } else {
        if (elementMinutes.classList.contains(`${ACCEPT_VALUE}`)) {
          elementMinutes.classList.remove(`${ACCEPT_VALUE}`);
        }

        elementMinutes.classList.add(`${DO_NOT_ACCEPT_VALUE}`);
        elementErrorMinutes.innerHTML = arrayErrorsMinutes[1];
      }

      /* Задаем стилевое оформление поля seconds, в зависимости 
      от корректности введенного пользователем значения. */

      if (arrayErrorsSeconds.length === 0) {
        if (elementSeconds.classList.contains(`${DO_NOT_ACCEPT_VALUE}`)) {
          elementSeconds.classList.remove(`${DO_NOT_ACCEPT_VALUE}`);
        }

        elementSeconds.classList.add(`${ACCEPT_VALUE}`);
        elementErrorSeconds.innerHTML = "";
      } else {
        if (elementSeconds.classList.contains(`${ACCEPT_VALUE}`)) {
          elementSeconds.classList.remove(`${ACCEPT_VALUE}`);
        }

        elementSeconds.classList.add(`${DO_NOT_ACCEPT_VALUE}`);
        elementErrorSeconds.innerHTML = arrayErrorsSeconds[1];
      }
    }
  });
})();