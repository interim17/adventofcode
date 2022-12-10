let regex = /\d/;
let instructions = `move 45 from 9 to 1`;
let array = [];
let mainarray = [];

for (let i = 0; i < instructions.length; i++) {
    // while working on a given instruction populate the subarray
    

        if (regex.test(instructions[i])) {
            if (regex.test(instructions[i+1])) {
             let newstring = instructions[i].concat(instructions[i+1])
                console.log(parseInt(newstring))
                array.push(parseInt(newstring));
                i++
                continue;
            }
            console.log(instructions[i]);
            array.push(parseInt(instructions[i]))
        }
        if (array.length === 3) {mainarray.push(array);
            array = [] }
    
    // return array;

}

console.log(mainarray)


