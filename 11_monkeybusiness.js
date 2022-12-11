let input = `Monkey 0:
Starting items: 53, 89, 62, 57, 74, 51, 83, 97
Operation: new = old * 3
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 5

Monkey 1:
Starting items: 85, 94, 97, 92, 56
Operation: new = old + 2
Test: divisible by 19
  If true: throw to monkey 5
  If false: throw to monkey 2

Monkey 2:
Starting items: 86, 82, 82
Operation: new = old + 1
Test: divisible by 11
  If true: throw to monkey 3
  If false: throw to monkey 4

Monkey 3:
Starting items: 94, 68
Operation: new = old + 5
Test: divisible by 17
  If true: throw to monkey 7
  If false: throw to monkey 6

Monkey 4:
Starting items: 83, 62, 74, 58, 96, 68, 85
Operation: new = old + 4
Test: divisible by 3
  If true: throw to monkey 3
  If false: throw to monkey 6

Monkey 5:
Starting items: 50, 68, 95, 82
Operation: new = old + 8
Test: divisible by 7
  If true: throw to monkey 2
  If false: throw to monkey 4

Monkey 6:
Starting items: 75
Operation: new = old * 7
Test: divisible by 5
  If true: throw to monkey 7
  If false: throw to monkey 0

Monkey 7:
Starting items: 92, 52, 85, 89, 68, 82
Operation: new = old * old
Test: divisible by 2
  If true: throw to monkey 0
  If false: throw to monkey 1`

  let inputArr = input.split("Monkey ")
  let outputArr =[]


  inputArr.forEach((el) => {
    outputArr.push(el.split("\n"))
  });

  console.log(outputArr);

  let monkey0 = {
    items: [53, 89, 62, 57, 74, 51, 83, 97],
    operation: (a) => {return a},
    test: (a) => {return a%2 == 0},
    ifTrue: monkey1.items.push(a),
    ifFalse: monkey5.items.push(a),
  }

// Monkey 1:
// Starting items: 85, 94, 97, 92, 56
// Operation: new = old + 2
// Test: divisible by 19
//   If true: throw to monkey 5
//   If false: throw to monkey 2
  let monkey1 = {
    items: [85, 94, 97, 92, 56],
    operation: (a) => {Math.floor((a+2)/3)},
    test: (a) => {return a%19 == 0},
    ifTrue: monkey5.items.push(a),
    ifFalse: monkey2.items.push(a),
  }

// Monkey 2:
// Starting items: 86, 82, 82
// Operation: new = old + 1
// Test: divisible by 11
//   If true: throw to monkey 3
//   If false: throw to monkey 4
  let monkey2 = {
    items: [86, 82, 82],
    operation: (a) => {Math.floor((a+1)/3)},
    test: (a) => {return a%11 == 0},
    ifTrue: monkey3.items.push(a),
    ifFalse: monkey4.items.push(a),
  } let monkey# = {
    items: [],
    operation: (a) => {Math.floor((###)/3)},
    test: (a) => {return ### == 0},
    ifTrue: monkey#.items.push(a),
    ifFalse: monkey#.items.push(a),
  } let monkey# = {
    items: [],
    operation: (a) => {Math.floor((###)/3)},
    test: (a) => {return ### == 0},
    ifTrue: monkey#.items.push(a),
    ifFalse: monkey#.items.push(a),
  } let monkey# = {
    items: [],
    operation: (a) => {Math.floor((###)/3)},
    test: (a) => {return ### == 0},
    ifTrue: monkey#.items.push(a),
    ifFalse: monkey#.items.push(a),
  } let monkey# = {
    items: [],
    operation: (a) => {Math.floor((###)/3)},
    test: (a) => {return ### == 0},
    ifTrue: monkey#.items.push(a),
    ifFalse: monkey#.items.push(a),
  }
  let monkey7 = {
    items: [92, 52, 85, 89, 68, 82],
    operation: (a) => {Math.floor((a*a)/3},
    test: (a) => {return a%2 == 0},
    ifTrue: monkey0.items.push(a),
    ifFalse monkey1.items.push(a),
  }
  