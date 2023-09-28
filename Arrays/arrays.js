let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
let namesLenght = names.map((name) => name.length);
names.reduce((total, name) => total + name.length, 0) / names.length;
// The initial value of the reduction is set to 0. Inside the reducer function, total represents the accumulated sum of string lengths, and name represents each individual name in the array. The reducer function adds the length of each name to the total in each iteration. (like any accumulator, total += name.length).