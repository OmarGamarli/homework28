// -------------------1---------------------\\
1)
//что выведет в консоли функция call
const person = {
name: 'Alex',
age: 24,
call: function () {
    console.log(`${this.name} = ${this.age}`);
}
}

// Alex=24

2)
//получите доступ к методу call и запустите его
const person = {
    name: 'Alex',
    age: 24,
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
const callfunc = person.call
callfunc()
3)
//выведите в консоли все ключи из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
for (const keys in person)(
console.log(keys);
)

4)
//выведите в консоли все значения из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
for (const value in person) {
    console.log(person[value]);
}

5)
//преобразуйте обьект ниже в массив
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(Object.entries(person));
6)
//преобразуйте обьект ниже в строку
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(JSON.stringify(person));

7)
//преобразуйте обьект ниже в конструктор функции
function Person(name, age, isMarried, hasCar, hasJob, job, childs, awards) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.hasCar = hasCar;
    this.hasJob = hasJob;
    this.job = job;
    this.childs = childs;
    this.awards = awards;
}
const person = new Person('Alex', 24, false, false, true, 'Programmer', ['Hanz', 'Marry'], {
    itMaster: 'Legend rang',
    driver: 'Fast man'
})
let obj = {
name: 'Alex',
age: 24,
isMarried: false,
hasCar: false,
hasJob: true,
job: 'Programmer',
childs: ['Hanz', 'Marry'],
awards: {
    itMaster: 'Legend rang',
    driver: 'Fast man'
}
}

8)
//перечисли встроенные конструкторы javascript
new String()
new Number()
new Boolean()
new Object()
new Array()
new RegExp()
new Function()
new Date()
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
const alex = new Person('Alex', 24, 'Programmer')

// ---------------------2--------------\\
1)
//создайте пустой обьект 3мя способами
const person = {}
const person2 = new Object()
const person3 = Object.create

2)
//создайте обьект с вашими персональными данными 
//пример: 
let obj = {
    name: 'Alex',
    age: 24
}
let myobj = {
name: 'Omar'
age: 13
}

3)
//чем является name в обьекте ниже?
let obj = {
name: 'Alex',
age: 24
}
// Свойством

4)
//чем является 'Alex' в обьекте ниже?
let obj = {
name: 'Alex',
age: 24
}
// Значение свойства

5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/
const person4 = new Object()
person4.name = 'Samui'
person4.bornmonth = '4 may'
person4.bornyear = '1998'
person4.year = 24
person4.award = 2
person4.like = 'reading and programming'

6)
//выведите в консоли значение name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.name);

7)
//выведите в консоли значение age из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.age);

8)
//выведите в консоли значение isMarried из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.isMarried);


9)
//выведите в консоли имя первого ребенка из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.childs[0]);

10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (const childs of obj.childs) {
    console.log(childs);
}
11)
//выведите в консоли значение itMaster из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.awards.itMaster);

12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (const key in obj) {
    console.log(key);
}

13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (const key in obj) {
    console.log(obj[key]);
}


14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.childs[1] = 'Linda'

15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.job = 'menedjer'

16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj['awards']['itMaster'])


17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj['name']);
18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj.job
obj.hasJob = false
19)
//удалите name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj.name
20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj['job']
obj.hasJob = false
1)
//что такое JSON?
// JAVA Script Object Notation

2)
//зачем использовать JSON?  
// Формат JSON синтаксически похож на код для 
// создания объектов JavaScript.Благодаря этому
//  программа JavaScript может легко преобразовать данные JSON в объекты JavaScript.



3)
//преобразуйте строку ниже в обьект JSON и выведите в консоли
let str = '{name: "Alex", age: 24}';
console.log(JSON.parse(str));
4)
//преобразуйте обьект ниже в строку и выведите в консоли
let obj = {
name: "Alex",
age: 24
};
console.log(JSON.stringify(obj));
5)
//создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript

6)
//какие типы данных может содержать JSON обьект?
// строка
// число
// объект
// массив
// логическое
// null

7)
//какие типы данных не может содержать обьект?
// функция
// даты
// undefined

8)
//в каком виде мы получаем JSON с сервера?

9)
//в каком виде мы отправляем JSON на сервер?