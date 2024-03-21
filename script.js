
let kate = ['Kate', '30', 'programmer', 'playing football'];
let tom = ['Tom', '29', 'runner', 'playing games'];
let julie = ['Julie', '23', 'tester', 'playing hockey'];

// let person=[...kate, 'Marc', '27', 'engineer', 'computing', ...julie];
let person=['Marc', '27', ...kate, 'engineer', 'computing', julie];
console.log (person);