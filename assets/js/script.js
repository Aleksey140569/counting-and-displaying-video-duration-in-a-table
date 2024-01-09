'use strict';

// Тестовые данные.

const summary = [
    ['4. Что такое JavaScript', '0:08:03', '0:08:03'],
    ['5. Инструменты', '0:02:14', '0:10:17'],
    ['6. Установка VS Code. Windows', '0:06:09', '0:16:26'],
    ['7. Установка VS Code. Mac', '0:07:10', '0:23:36'],
    ['8. Способы применения JavaScript', '0:10:42', '0:34:18'],
    ['9. Консоль', '0:12:08', '0:46:26'],
    ['10. Переменные. Комментарии', '0:13:28', '0:59:54'],
    ['11. let и const', '0:10:41', '1:10:35'],
    ['12. Типы данных', '0:16:20', '1:26:55'],
    ['13. Преобразование типов', '0:20:00', '1:46:55'],
    ['14. Операции с числами', '0:11:17', '1:58:12'],
    ['15. Строки', '0:30:35', '2:28:47'],
    ['16. Шаблонные строки', '0:12:50', '2:41:37'],
    ['17. Задание Анкета', '0:09:23', '2:51:00'],
    ['18. Операторы сравнения', '0:14:09', '3:05:09'],
    ['19. Приоритет операторов', '0:11:24', '3:16:33'],
    ['20. Сокращённая форма записи операторов', '0:07:28', '3:24:01'],
    ['21. Задание Лишний вес', '0:08:02', '3:32:03'],
    ['22. If Else Statement', '0:16:20', '3:48:23'],
    ['23. Лишний вес с If Else. Задание', '0:01:44', '3:50:07'],
    ['24. Лишний вес If Else. Решение', '0:04:10', '3:54:17'],
    ['25. Truthy и Falsy значения', '0:10:32', '4:04:49'],
    ['26. Boolean логика', '0:16:32', '4:21:21'],
    ['27. Switch Statement', '0:10:37', '4:31:58'],
    ['28. Statements & Expressions', '0:06:04', '4:38:02'],
    ['29. Тернарный оператор', '0:12:06', '4:50:08'],
    ['30. Тернарный оператор. Задание', '0:01:44', '4:51:52'],
    ['31. Тернарный оператор. Решение задания', '0:02:57', '4:54:49'],
    ['32. Версии JavaScript', '0:14:09', '5:08:58'],
    ['33. Strict Mode', '0:08:33', '5:17:31'],
    ['34. Функции', '0:20:45', '5:38:16'],
    ['35. Функции. Declarations vs Expressions', '0:11:42', '5:49:58'],
    ['36. Стрелочные функции (arrow functions)', '0:10:23', '6:00:21'],
    ['37. Вызов функций внутри других функций', '0:07:37', '6:07:58'],
    ['39. Функции. Задание', '0:04:17', '6:12:15'],
    ['40. Функции. Решение задания', '0:14:57', '6:27:12'],
    ['41. Массивы', '0:12:10', '6:39:22'],
    ['42. Методы массивов', '0:11:47', '6:51:09'],
    ['43. Массивы. Задание - 1', '0:01:18', '6:52:27'],
    ['43. Массивы. Задание', '0:01:19', '6:53:46'],
    ['44. Массивы. Решение задания', '0:06:54', '7:00:40'],
    ['45. Объекты', '0:07:36', '7:08:16'],
    ['46. Объекты. Dot vs Bracket Notation', '0:23:10', '7:31:26'],
    ['47. Методы объектов', '0:21:21', '7:52:47'],
    ['48. Объекты. Задание', '0:03:18', '7:56:05'],
    ['49. Объекты. Решение задания', '0:13:08', '8:09:13'],
    ['50. Цикл For', '0:18:16', '8:27:29'],
    ['51. Циклы и массивы', '0:15:30', '8:42:59'],
    ['52. Break & Continue', '0:06:16', '8:49:15'],
    ['53. Итерация в обратном порядке. Цикл в цикле', '0:18:04', '9:07:19'],
    ['54. Цикл While', '0:18:06', '9:25:25'],
    ['55. Циклы. Задание', '0:03:26', '9:28:51'],
    ['56. Циклы. Решение задания', '0:14:43', '9:43:34'],
    ['58. Настройка VS Code', '0:22:23', '10:05:57'],
    ['59. Настройка Development Environment', '0:15:14', '10:21:11'],
    ['60. Как Изучать Программирование', '0:34:22', '10:55:33'],
    ['61. Думай Как Программист', '0:14:27', '11:10:00'],
    ['62. Поиск информации в интернете', '0:38:36', '11:48:36'],
    ['63. Debugging (Отладка Кода)', '0:07:17', '11:55:53'],
    ['64. Отладка кода при помощи консоли и breakpoints', '0:35:50', '12:31:43'],
    ['65. Dev Skills. Задание', '0:02:43', '12:34:26'],
    ['66. Dev Skills. Решение задания', '0:14:05', '12:48:31'],
    ['68. Структура веб страницы. Основные html элементы', '0:14:08', '13:02:39'],
    ['69. Атрибуты, class, id', '0:20:20', '13:22:59'],
    ['70. Стилизация при помощи CSS', '0:16:45', '13:39:44'],
    ['71. CSS Box Model', '0:36:22', '14:16:06'],
    ['73. Проект №1. Угадай Число!', '0:12:54', '14:29:00'],
    ['74. Что такое DOM', '0:08:15', '14:37:15'],
    ['75. Манипуляция элементами', '0:07:46', '14:45:01'],
    ['76. Events & Event Handlers', '0:20:12', '15:05:13'],
    ['77. Имплементация логики', '0:20:42', '15:25:55'],
    ['78. Изменение CSS при помощи JavaScript', '0:09:19', '15:35:14'],
    ['79. Челлендж - начать игру сначала', '0:18:46', '15:54:00'],
    ['80. Лучший результат', '0:07:39', '16:01:39'],
    ['81. Рефакторинг кода', '0:16:06', '16:17:45'],
    ['82. Проект №2. Модальное окно', '0:12:57', '16:30:42'],
    ['83. Работа с классами', '0:22:02', '16:52:44'],
    ['84. Обработка события нажатия клавиши', '0:16:40', '17:09:24'],
    ['85. Проект №3. Игра Свинья', '0:19:08', '17:28:32'],
    ['86. Бросаем кубик', '0:14:43', '17:43:15'],
    ['87. Смена игрока', '0:13:21', '17:56:36'],
    ['88. Функциональность  Оставить очки', '0:25:18', '18:21:54'],
    ['89. Новая игра', '0:17:02', '18:38:56'],
    ['91. Обзор JavaScript', '0:17:40', '18:56:36'],
    ['92. Движок JavaScript', '0:17:44', '19:14:20'],
    ['93. Контекст Выполнения & Стек Вызовов', '0:22:29', '19:36:49'],
    ['94. Scope & Scope Chain', '0:32:42', '20:09:31'],
    ['95. Scope на практике', '0:28:17', '20:37:48'],
    ['96. Variable Environment. Hoisting & TDZ', '0:13:56', '20:51:44'],
    ['97. Variable Environment. Hoisting & TDZ на практике', '0:16:59', '21:08:43'],
    ['98. Ключевое слово this', '0:07:49', '21:16:32'],
    ['99. Ключевое слово this на практике', '0:12:31', '21:29:03'],
    ['100. Regular vs Arrow Functions', '0:20:16', '21:49:19'],
    ['101. Типы - Примитивные VS Ссылочные', '0:26:36', '22:15:55'],
    ['102. Типы - Примитивные VS Ссылочные на практике', '0:15:57', '22:31:52'],
    ['104. Деструктуризация Массивов', '0:25:34', '22:57:26'],
    ['105. Деструктуризация Объектов', '0:29:31', '23:26:57'],
    ['106. Оператор Spread', '0:29:29', '23:56:26'],
    ['107. Паттерн Rest и Параметры Rest', '0:26:01', '24:22:27'],
    ['108. Вычисление Логических Выражений По Сокращённой Схеме', '0:25:02', '24:47:29'],
    ['109. Nullish Coalescing - Оператор Нулевого Слияния', '0:05:58', '24:53:27'],
    ['110. Задание 1', '0:08:29', '25:01:56'],
    ['111. Задание 1. Решение', '0:16:47', '25:18:43'],
    ['112. Циклы и Массивы. Цикл for of', '0:09:27', '25:28:10'],
    ['113. Улучшенные Объектные Литералы', '0:07:39', '25:35:49'],
    ['114. Optional Chaining', '0:24:11', '26:00:00'],
    ['115. Циклы и Объекты', '0:14:16', '26:14:16'],
    ['116. Задание 2', '0:05:27', '26:19:43'],
    ['117. Задание 2. Решение', '0:23:37', '26:43:20'],
    ['118. Set', '0:14:49', '26:58:09'],
    ['119. Map. Основы', '0:21:23', '27:19:32'],
    ['120. Map. Итерация', '0:15:02', '27:50:07'],
    ['121. Какую Структуру Данных Использовать', '0:12:17', '28:02:24'],
    ['122. Задание 3', '0:03:16', '28:05:40'],
    ['123. Задание 3. Решение', '0:07:01', '28:12:41'],
    ['124. Работа Со Строками. Часть 1', '0:20:04', '28:32:45'],
    ['125. Работа Со Строками. Часть 2', '0:24:47', '28:57:32'],
    ['126. Работа Со Строками. Часть 3', '0:22:33', '29:20:05'],
    ['127. Задание 4', '0:04:30', '29:24:35'],
    ['128. Задание 4. Решение', '0:09:41', '29:34:16'],
    ['130. Параметры По Умолчанию', '0:12:04', '29:46:20'],
    ['131. Передача Аргументов. Значения vs Ссылки', '0:15:05', '30:01:25'],
    ['132. Функции Первого Класса vs Функции Высшего Порядка', '0:06:45', '30:08:10'],
    ['133. Функции Принимающие Callback Функции', '0:19:21', '30:27:31'],
    ['134. Функции Возвращающие Функции', '0:06:40', '30:34:11'],
    ['135. Методы call() и apply()', '0:18:57', '30:53:08'],
    ['136. Метод bind()', '0:22:18', '31:15:26'],
    ['138. Задание 1', '0:10:09', '31:25:35'],
    ['139. Задание 1. Решение', '0:15:38', '31:41:13'],
    ['140. Immediately Invoked Function Expression (IIFE)', '0:11:13', '31:52:26'],
    ['141. Замыкания (Closures)', '0:21:37', '32:14:03'],
    ['142. Больше Примеров О Closures', '0:17:51', '32:31:54'],
    ['143. Задание 2', '0:04:52', '32:36:46'],
    ['144. Задание 2. Решение', '0:03:51', '32:40:37'],
    ['146. Простые Методы Массивов', '0:24:47', '33:05:24'],
    ['147. Итерация Массивов С Помощью Цикла forEach', '0:12:48', '33:18:12'],
    ['148. forEach С Map И Set', '0:06:58', '33:25:10'],
    ['149. Проект №4. Приложение Просто Банк', '0:12:47', '33:37:57'],
    ['150. Создание Элементов DOM', '0:19:42', '33:57:39'],
    ['151. Задание 1', '0:03:16', '34:00:55'],
    ['152. Задание 1. Решение.', '0:06:48', '34:07:43'],
    ['153. Преобразование Данных map(), filter(), reduce()', '0:05:41', '34:13:24'],
    ['154. Метод map()', '0:20:30', '34:33:54'],
    ['155. Вычисление Nicknames', '0:14:39', '34:48:33'],
    ['156. Метод filter()', '0:06:46', '34:55:19'],
    ['157. Метод reduce()', '0:16:09', '35:11:28'],
    ['158. Отображаем баланс в приложении', '0:05:22', '35:16:50'],
    ['159. Задание 2', '0:02:01', '35:18:51'],
    ['161. Method Chaining (Цепь Вызовов Методов)', '0:06:56', '35:25:47'],
    ['162. Method Chaining В Приложении', '0:10:24', '35:36:11'],
    ['163. Задание 3', '0:00:58', '35:37:09'],
    ['164. Задание 3. Решение', '0:06:49', '35:43:58'],
    ['165. Метод find()', '0:06:05', '35:50:03'],
    ['166. Имплементация Login', '0:23:46', '36:13:49'],
    ['167. Имплементация Transfers', '0:22:57', '36:36:46'],
    ['168. Метод findIndex()', '0:13:28', '36:50:14'],
    ['169. Методы some() и every()', '0:09:32', '36:59:46'],
    ['170. Запрос Займа', '0:06:33', '37:06:19'],
    ['171. Методы flat() и flatMap()', '0:10:20', '37:16:39'],
    ['172. Сортировка Массивов', '0:08:41', '37:25:20'],
    ['173. Сортируем Транзакции В Приложении', '0:09:44', '37:35:04'],
    ['174. Другие Способы Создания И Заполнения Массивов', '0:11:32', '37:46:36'],
    ['175. Array.from() в веб приложении', '0:11:09', '37:57:45'],
    ['176. Какой Метод Использовать', '0:06:01', '38:03:46'],
    ['177. Методы Массивов На Практике', '0:28:45', '38:32:31'],
    ['179. Задание 4', '0:06:23', '38:38:54'],
    ['180. Задание 4. Решение', '0:20:32', '38:59:26'],
    ['182. Преобразование И Проверка Чисел', '0:19:40', '39:19:06'],
    ['183. Работа с Math', '0:19:40', '39:19:06'],
    ['184. Вносим Правки В Приложение', '0:19:40', '39:19:06'],
    ['185. Оператор Остаток', '0:05:53', '39:24:59'],
    ['186. Используем Оператор Остаток В Приложении', '0:04:33', '39:29:32'],
    ['187. BigInt', '0:13:23', '39:42:55'],
    ['188. Работа С Датами', '0:16:21', '39:59:16'],
    ['189. Добавляем Даты В Приложение', '0:20:42', '40:19:58'],
    ['190. Операции С Датами', '0:06:31', '40:26:29'],
    ['191. Операции С Датами В Приложении', '0:08:53', '40:35:22'],
    ['192. Интернационализация Дат', '0:18:45', '40:54:07'],
    ['193. Интернационализация Чисел', '0:07:47', '41:01:54'],
    ['194. Интернационализация Чисел В Приложении', '0:12:25', '41:14:19'],
    ['195. Таймеры', '0:13:15', '41:27:34'],
    ['196. Имплементация Обратного Отсчёта', '0:27:12', '41:54:46'],
    ['198. Вебсайт Просто Банк', '0:10:32', '42:05:18'],
    ['199. Как На Самом Деле Работает DOM', '0:11:26', '42:16:44'],
    ['200. Выбор, Создание И Удаление Элементов', '0:23:54', '42:40:38'],
    ['201. Стили, Атрибуты, Классы', '0:24:49', '43:05:27'],
    ['202. Имплементация Плавного Прокручивания', '0:15:49', '43:21:16'],
    ['203. Виды Событий И Обработчиков Событий', '0:15:04', '43:36:20'],
    ['204. Распространение Событий (Event Propagation)', '0:06:34', '43:42:54'],
    ['205. Event Propagation На Практике', '0:23:59', '44:06:53'],
    ['206. Делегирование Событий (Event Delegation)', '0:17:43', '44:24:36'],
    ['207. Перемещение По DOM', '0:17:48', '44:42:24'],
    ['208. Создание Вкладки', '0:21:34', '45:03:58'],
    ['209. Передача Аргументов В Обработчики Событий', '0:19:26', '45:23:24'],
    ['210. Sticky Navigation', '0:08:07', '45:31:31'],
    ['211. Intersection Observer API', '0:26:38', '45:58:09'],
    ['212. Показ Элементов При Прокручивании', '0:17:00', '46:15:09'],
    ['213. Lazy Loading', '0:22:01', '46:37:10'],
    ['214. Создание Слайдера. Часть 1', '0:23:02', '47:00:12'],
    ['215. Создание Слайдера. Часть 2', '0:21:14', '47:21:26'],
    ['216. Lifecycle DOM Events', '0:09:59', '47:31:25'],
    ['217. defer & async', '0:15:38', '47:47:03'],
    ['219. Что Такое Объектно-Ориентированное Программирование', '0:26:21', '48:13:24'],
    ['220. ООП в JavaScript', '0:11:01', '48:24:25'],
    ['221. Функции-Конструкторы и Оператор new', '0:16:52', '48:41:17'],
    ['222. Прототипы', '0:14:54', '48:56:11'],
    ['223. Прототипное Наследование и Прототипная Цепь', '0:12:42', '49:08:53'],
    ['224. Прототипное Наследование для Встроенных Объектов', '0:16:39', '49:25:32'],
    ['225. Задание 1', '0:01:47', '49:27:19'],
    ['226. Задание 1. Решение', '0:05:59', '49:33:18'],
    ['227. Классы ES6', '0:16:04', '49:49:22'],
    ['228. Setters & Getters', '0:16:20', '50:05:42'],
    ['229. Статические Методы', '0:09:11', '50:14:53'],
    ['230. Object.create()', '0:09:57', '50:24:50'],
    ['231. Задание 2', '0:01:53', '50:26:43'],
    ['232. Задание 2. Решение', '0:04:38', '50:31:21'],
    ['233. Наследование Классов . Функции-Конструкторы', '0:27:40', '50:59:01'],
    ['234. Задание 3', '0:02:56', '51:01:57'],
    ['235. Задание 3. Решение', '0:09:45', '51:11:42'],
    ['236. Наследование Классов . Классы ES6', '0:12:19', '51:24:01'],
    ['237. Наследование Классов . Object.create()', '0:09:14', '51:33:15'],
    ['238. Ещё Один Пример Класса', '0:13:48', '51:47:03'],
    ['239. Инкапсуляция. Protected Свойства и Методы', '0:07:12', '51:54:15'],
    ['240. Инкапсуляция. Приватные Поля и Методы Класса', '0:18:07', '52:12:22'],
    ['241. Methods Chaining', '0:05:04', '52:17:26'],
    ['242. Классы ES6. Подводим Итоги', '0:07:27', '52:24:53'],
    ['243. Задание 4', '0:01:12', '52:26:05'],
    ['244. Задание 4. Решение', '0:07:29', '52:33:34'],
    ['246. Проект №5. Приложение Кардио', '0:04:46', '52:38:20'],
    ['247. Как Планировать Проект', '0:20:29', '52:58:49'],
    ['248. Использование Geolocation API', '0:09:01', '53:07:50'],
    ['249. Отображение Карты с Помощью Библиотеки Leaflet', '0:14:47', '53:22:37'],
    ['250. Отображение Маркера на Карте', '0:19:12', '53:41:49'],
    ['251. Размещение Формы Ввода Тренировки', '0:17:43', '53:59:32'],
    ['252. Архитектура Проекта', '0:10:31', '54:10:03'],
    ['253. Рефакторинг Кода под Архитектуру Проекта', '0:22:40', '54:32:43'],
    ['254. Работа с Данными Тренировки - Создание Классов', '0:12:58', '54:45:41'],
    ['255. Создание Новой Тренировки', '0:32:42', '55:18:23'],
    ['256. Отображение Тренировок', '0:18:24', '55:36:47'],
    ['257. Переход к Маркеру по Клику', '0:13:19', '55:50:06'],
    ['258. Работа с localStorage', '0:22:58', '56:13:04'],
    ['259. Самостоятельная Работа - Добавление Фич в Приложение', '0:05:49', '56:18:53'],
    ['261. Асинхронный JavaScript, AJAX и API', '0:21:47', '56:40:40'],
    ['262. Первый AJAX вызов - XMLHttpRequest', '0:28:46', '57:09:26'],
    ['263. Как Работает Web - Request & Response', '0:16:32', '57:25:58'],
    ['264. Что Такое Callback Hell', '0:17:55', '57:43:53'],
    ['265. Promises & Fetch API', '0:10:56', '57:54:49'],
    ['266. Потребление Promise', '0:10:30', '58:05:19'],
    ['267. Promise Chaining', '0:11:36', '58:16:55'],
    ['268. Обработка отклоненного Promise', '0:18:35', '58:35:30'],
    ['269. Выбрасывание ошибок вручную', '0:18:53', '58:54:23'],
    ['270. Задание 1', '0:05:53', '59:00:16']
  ];

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

// Константа формата вывода часов.

const HOURS_FORMAT = "0";

// Класс для вырыванивания данных в ячейках

const TEXT_ALIGN_CENTER = "text-align-center";

// Класс для добавления 25 пикселов в виде paddinga с правой стороны.

const PADDING_RIGHT_25PX = "padding-right-25px";

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

// Функция преобразования количества часов, минут и секун в табличную строку.

function convertTimeToString(hours, minutes, seconds)
{
  let time = [];

  if (hours === 0) {
    time.push(`${HOURS_FORMAT}`);
  } else {
    time.push(hours);
  }

  if (minutes === 0) {
    time.push('00');
  } else if(minutes < 10) {
    time.push('0' + minutes);
  } else {
    time.push(minutes);
  }

  if (seconds === 0) {
    time.push('00');
  } else if(seconds < 10) {
    time.push('0' + seconds);
  } else {
    time.push(seconds);
  }

  let timeString = '';
  timeString = time.join(':');

  return timeString;
}

// Функция, которая высчитывает длину видео в секундах, по переданной ей длительности видео в часах, минутух и секундах.

function convertTimeToSeconds(hours, minutes, seconds)
{
  let hoursInSeconds = hours * 3600;
  let minutesInSeconds = minutes * 60;
  let tempTimeInSeconds = hoursInSeconds + minutesInSeconds + seconds;

  return tempTimeInSeconds;
}

// Функция, которая длительность видео в секундах преобразовывает в длительность видео в часах, минутах и секундах.

function convertSecondsToTime(timeInSeconds)
{
  let hoursInSeconds = timeInSeconds - (timeInSeconds % 3600);
  let hours = hoursInSeconds / 3600;
  let remainderInSeconds = timeInSeconds % 3600;
  let minutesInSeconds = remainderInSeconds - (remainderInSeconds % 60);
  let minutes = minutesInSeconds / 60;
  let seconds = remainderInSeconds % 60;
  let timeString = convertTimeToString(hours, minutes, seconds);

  return timeString;
}

// Функция вывода данных в таблицу

function displayTable(array, element)
{
  element.innerHTML = "";

  array.forEach(function(record, index) {
    let [name, duration, totalDuration] = record;

    const tableRow = `
      <tr>
        <td class="${TEXT_ALIGN_CENTER}">
          ${index + 1}
        </td>
        <td class="${PADDING_RIGHT_25PX}">
          ${name}
        </td>
        <td class="${TEXT_ALIGN_CENTER}">
          ${duration}
        </td>
        <td class="${TEXT_ALIGN_CENTER}">
          ${totalDuration}
        </td>
      </tr>
    `;

    element.insertAdjacentHTML('beforeend', tableRow);
  });
}

// События.

(function() {

  /* Объявляем массив, в котором будем хранить всю необходимую для
  построения таблицы информацию. */

  let mainArray = summary;

  // Объявляем переменную, в которой будем хранить общую длительность видио в секундах.

  let totalVideoDuration = 0;

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

  // Элемент внутрь которого мы помещаем данные для показа ввиде таблицы.

  const tbody = document.querySelector('tbody');

  document.getElementById(`${ADD_RECORD}`).addEventListener('click', function() {

    /* Получаем данные из элемента input в виде строки и записываем их
    в соотвествующие переменные. Название типа nameAsString говорит,
    что данные имеют тип string */

    const nameAsString = elementName.value.trim();
    const hoursAsString = elementHours.value.trim();
    const minutesAsString = elementMinutes.value.trim();
    const secondsAsString = elementSeconds.value.trim();

    /* Переменные для храния наличия ошибок в введенных пользоватем
    значений. */

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

  if (mainArray.length !== 0) {
    displayTable(mainArray, tbody);
    let lastArrayElement = mainArray[mainArray.length - 1][2];
    let tempTimeArray = lastArrayElement.split(":");
    const [tempHoursString, tempMinutesString, tempSecondsString] = tempTimeArray;
    let tempHours = Number(tempHoursString);
    let tempMinutes = Number(tempMinutesString);
    let tempSeconds = Number(tempSecondsString);
    totalVideoDuration = convertTimeToSeconds(tempHours, tempMinutes, tempSeconds);
  }
})();