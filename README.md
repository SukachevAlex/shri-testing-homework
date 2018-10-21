# Домашнее задание: автотесты

Вам дано приложение на JavaScript и нужно написать для него автотесты: интеграционные тесты на интерфейс и модульные тесты на серверную часть.

## Предметная область

Приложение отображает в браузере информацию из git репозитория: список коммитов, файловую систему для выбранного коммита, содержимое выбранного файла (поддерживаются только текстовые форматы). Для удобства навигации на каджой странице отображаются "хлебные крошки".

## Как запустить

```sh
git clone git@github.com:dima117/shri-testing-homework.git
cd shri-testing-homework.git
npm i
npm start
```

Запуск модульных тестов:

```sh
npm run test:unit
```

Запуск модульных тестов с покрытием кода в консоли:

```sh
npm run test:coverage
```

Запуск интеграционных тестов:

```sh
npm run test:integration
``` 

## Интеграционные тесты

Сценарии для интеграционных тестов

- на всех страницах (история коммитов, просмотр файловой системы, просмотр содержимого файла) правильно отображается их содержимое;
- правильно работают переходы по страницам
  - из списка коммитов на список файлов
  - из списка файлов во вложенную папку
  - из списка файлов на страницу отдельного файла
  - переходы по хлебным крошкам

## Модульные тесты

- нужно добавить в README список логических блоков системы и их сценариев
- для каждого блока нужно написать модульные тесты
- если необходимо, выполните рефакторинг, чтобы реорганизовать логические блоки или добавить точки расширения

- - - -

# Решение домашнего задания

## Модульные тесты

### Список логических блоков системы и их сценарии

#### Логические блоки:

1. Список коммитов.
2. Навигация.
3. Файловая структура.
4. Содержание файлов.

#### Сценарии:

1. Список коммитов:
    - информация о коммитах имеет верный формат;
    - совпадает количество параметров;
    - правильно парсится история коммитов;
    - на рендер отправляются корректные аргументы.

2. Навигация:
    - корректно генерируется путь для папок;
    - корректно генерируется путь для файлов;
    - корректно генерируется путь для объектов;
    - корректно генерируется путь в хлебных крошках. 

3. Файловая структура:
    - корректная структура файлов;
    - на рендер отправляются корректные аргументы.

4. Содержание файлов:
    - возвращает корректные данные;
    - на рендер отправляются корректные аргументы.
