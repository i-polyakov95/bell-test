# Тестовое задание для Bell Integrator (ГазпромНефть)

## Задача:
Реализовать web приложение с использованием фреймворка Vue.js, которое совершает
запрос 100 элементов со следующей структурой из любого открытого api
```
{
  id,
  name,
  items: [
    {
      id,
      name
    }
  ]
}
```
В приложении должно быть реализовано 2 страницы: главная и история.
**Главная страница** должна состоять из двух колонок:
- В первой колонке отображается список всех элементов, полученных из api и поле текстового ввода. При вводе текста в поле фильтровать отображаемые элементы списка по следующему правилу: показывать только те элементы, у которых введенная пользователем строка
входит в поле `name` или в `items.name` и сортировать список элементов по количеству вхождений строки в обратном порядке.
У каждого элемента должна быть кнопка [+] при нажатии на которую элемент списка попадает во вторую колонку и пропадает из первой
- Во второй колонке отображаются "выбранные" элементы списка. У каждого элемента должна быть кнопка [-] при нажатии на которую элемент списка возвращается в первую колонку и пропадает из второй соответственно
- На главной странице так-же присутствуют три кнопки: [история][история добавлений][история удалений]. При нажатии на кнопку должен происходить переход на страницу истории с соответствующим параметром.
**Страница истории** состоит из списка событий перемещения элементов из колонки в колонку на главной странице. Событие должно показывать, какой элемент `{id, name}` был перемещен, какого рода было перемещение (добавление/удаление) и когда (любое отображение времени события)


## Комментарии:
- Найти публичную апишку с конструктором нужных запросов я быстро не смог, есть только со своей структурой данных, которая, разумеется, отличается от той, что в ТЗ. Решил, что будет проще сделать небольшой бек на ноде
- Запускается этот бек через `yarn start` (или `npm run start`) исполненный в `/api`, все данные лежат в `/api/db.json`
- Фронт запускается через `yarn serve`
- Для приемлемого внешнего вида использовал [Vuetify](https://vuetifyjs.com/), при этом намеренно не использовал какие-то продвинутые штуки типа Data Table со встроенным поиском и т.п.
- При выполнения тестового задания в условиях сжатых временных сроков (из-за текущей работы и прохождения множества других собеседований) не сильно заморачивался с архитектурой, комментированием и разделением на компоненты. Впрочем, считаю, что по сути здесь один реальный компонент и разбиение его на несколько других (например, вынесение в отдельный компонент списка и его итемов) повлекло бы только излишнее усложнение кода.

