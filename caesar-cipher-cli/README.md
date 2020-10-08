# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/alexeikravchuk/nodejs-course.git
cd caesar-cipher-cli
```

## Installing NPM modules

```
npm install
```

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift (integer value)
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Usage example:**

```bash
$ node caesar_cli -a decode -s 7 -i input.txt -o output.txt
```

```bash
$ node caesar_cli --action decode --shift 7 -i './input.txt' -o './output.txt'
```

```bash
$ node caesar_cli --action decode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

---

## Самопроверка (100 баллов)

Каждый пункт **10 баллов**, частичная реализация пункта **5 баллов**.
Каждый коммит после дедлайна (за исключением коммитов в README.md) **минус 10 баллов**

1. [x] в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы. +10 баллов
2. [x] в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению. +10 баллов
3. [x] если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются. +10 баллов
4. [x] если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0. +10 баллов
5. [x] если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0. +10 баллов
6. [x] если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin. +10 баллов
7. [x] если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout. +10 баллов
8. [x] шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются. +10 баллов
9. [x] если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст. +10 баллов
10. [x] кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.). +10 баллов
