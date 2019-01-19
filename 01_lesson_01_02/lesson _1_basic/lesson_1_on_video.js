let a = 0;
console.log(a);

let obj = {
  number: 5,
  sayNumber: function() {
          say = () => {
            console.log(this);
          }    
          say();
  }
}
console.log(5);
obj.sayNumber();


let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
  return name.length < 5
});

// вывели имена которые содержат меньше 5 букв

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLlO'];

answers = answers.map((item) => item.toLowerCase());

// вывели все элементы массива в нижнем регистре

console.log(answers);


console.log('Пользователь ${name}, ${age} лет')

function fetchData(data, count = 0) {
  console.log(`Данные: ${data} в количестве ${count}`);
}
fetchData('something');

// значение по умолчанию в аргументе count будет = 0

//rest параметры, рест оператор (начинается ...) должен быть в конце и только 1

function max(a, b, ...numbers) {
  console.log(numbers);
}

max (3, 9, 5, 7, 4)

//оператор разворота (спрэд)

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, ...arr2);
console.log(res);

// object спрэд оператор работает с объектами

const avatar = 'Photo';
const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};
  const admin = {
  name: 'admin',
  pass: 'root'
};
//const res = Object.assign(user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

const x = 25, y= 10;

// const coords = {
//   x: x,
//   y: y,
//   calcSq: function() {
//     console.log(this.x*this.y);
//   }
// }

const coords = {x,y,
  calcSq() {
    console.log(this.x*this.y);
  }
}

coords.calcSq();

console.log(coords);

// дестриктуризация

const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

// console.log(user.name);
// const userName = user.name; // старый вариант

const {name, pass, rights} = user; // новый метод создания переменных

console.log(name, rights);

// более сложная структура

const user = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rights: 'user'
};
// user.name.first

const {name: {first, second}, pass, rights} = user; // новый метод создания переменных

console.log(first, second);

function connect({
  host = 'localhost', // параметры по умолчанию
  port = 3000,
  user = 'default'} = {}) { // значения \\ = {} \\ у параметров по умолчанию
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

// connect({
//   port: 555,
//   host: 'sdgdg'
// })

// connect({}) //пустой объект

connect() //без аргументов, будет ошибка если не будет параметров по умолчанию

const numbers = [3, 5, 6, 6];

// const [a, b, c] = numbers;
const [, , c] = numbers; //один элемент отобразить

console.log(c);

// отобразить элемент массива из массива

const numbers = [[3, 5], [6, 6]];
// numbers[0][0]
const [[a, b], [c,d]] = numbers; //отобразить элемент массива из массива
console.log(a, b, c, d);

// отобразить данные из объекта

const country = {
  name: 'England',
  population: 2000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18,femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult);


func = ( param1 = true, param2 = 10, param3 = 'text') => {
  console.log(param1, param2, param3);
}

func ()




// Данные на входе 
const data = [
  1,
  '2.2px',
  true,
  [3, 'false', 'width:200', 4],
  '5',
  [
    true,
    '6pt',
    [
      7.7,
      [8, '9'],
      '7.7px'
    ],
    10
  ]
];

// Необходимо получить массив чисел вида [1, 2, 3, 4, 5, 6, 7.7, 8, 9, 10]

let result = {}

function recurtion(mass) {  
  for (var i = 0; i < mass.length; i++) {
		const value = mass[i];  
  	if (Array.isArray(value)) {
      recurtion(value)
  } else {  
  		const floatValue = parseFloat(value)      
      if (floatValue) {
      	result[floatValue] = floatValue
        }             
      }      
  	}  
}
recurtion(data);
console.log(Object.values(result));

