// let providedinstructions: string = `move 4 from 9 to 1
// // // move 6 from 3 to 1
// // // move 7 from 4 to 1
// // // move 2 from 8 to 5
// // // move 1 from 9 to 7
// // // move 1 from 8 to 5
// // // move 3 from 6 to 4
// // // move 6 from 1 to 5
// // // move 14 from 1 to 2
// // // move 1 from 6 to 1
// // // move 2 from 6 to 2
// // // move 9 from 5 to 9
// // // move 2 from 4 to 5
// // // move 2 from 5 to 3
// // // move 6 from 9 to 6
// // // move 4 from 1 to 2
// // // move 2 from 1 to 2
// // // move 5 from 6 to 1
// // // move 1 from 4 to 9
// // // move 4 from 9 to 4
// // // move 2 from 3 to 7
// // // move 2 from 4 to 9
// // // move 2 from 9 to 6
// // // move 5 from 2 to 9
// // // move 1 from 4 to 9
// // // move 1 from 4 to 3
// // // move 5 from 9 to 8
// // // move 1 from 6 to 5
// // // move 3 from 7 to 5
// // // move 2 from 1 to 6
// // // move 5 from 6 to 8
// // // move 1 from 9 to 4
// // // move 1 from 6 to 5
// // // move 9 from 2 to 7
// // // move 1 from 2 to 3
// // // move 1 from 4 to 6
// // // move 8 from 5 to 4
// // // move 1 from 6 to 1
// // // move 2 from 8 to 6
// // // move 1 from 6 to 4
// // // move 7 from 4 to 6
// // // move 1 from 3 to 1
// // // move 1 from 3 to 4
// // // move 3 from 4 to 1
// // // move 2 from 3 to 4
// // // move 2 from 4 to 5
// // // move 3 from 5 to 7
// // // move 7 from 8 to 2
// // // move 5 from 1 to 2
// // // move 12 from 7 to 6
// // // move 2 from 1 to 9
// // // move 2 from 9 to 1
// // // move 1 from 7 to 5
// // // move 6 from 2 to 3
// // // move 5 from 2 to 6
// // // move 6 from 2 to 6
// // // move 4 from 3 to 1
// // // move 3 from 2 to 1
// // // move 1 from 5 to 4
// // // move 7 from 1 to 2
// // // move 1 from 4 to 8
// // // move 7 from 2 to 9
// // // move 5 from 2 to 8
// // // move 2 from 6 to 8
// // // move 21 from 6 to 9
// // // move 8 from 9 to 1
// // // move 2 from 6 to 1
// // // move 3 from 8 to 7
// // // move 6 from 6 to 4
// // // move 7 from 1 to 8
// // // move 1 from 9 to 1
// // // move 7 from 7 to 3
// // // move 1 from 7 to 4
// // // move 1 from 7 to 4
// // // move 7 from 8 to 1
// // // move 5 from 4 to 8
// // // move 10 from 1 to 2
// // // move 3 from 1 to 4
// // // move 3 from 2 to 9
// // // move 1 from 4 to 5
// // // move 3 from 3 to 6
// // // move 1 from 6 to 4
// // // move 1 from 6 to 7
// // // move 1 from 7 to 8
// // // move 7 from 2 to 4
// // // move 10 from 9 to 1
// // // move 10 from 4 to 5
// // // move 2 from 5 to 2
// // // move 2 from 2 to 1
// // // move 11 from 8 to 9
// // // move 7 from 1 to 4
// // // move 1 from 6 to 1
// // // move 1 from 8 to 3
// // // move 1 from 4 to 6
// // // move 6 from 4 to 5
// // // move 1 from 5 to 7
// // // move 1 from 6 to 8
// // // move 6 from 1 to 6
// // // move 19 from 9 to 2
// // // move 1 from 1 to 8
// // // move 1 from 4 to 7
// // // move 9 from 2 to 6
// // // move 1 from 9 to 2
// // // move 2 from 8 to 1
// // // move 1 from 1 to 9
// // // move 7 from 3 to 6
// // // move 3 from 9 to 2
// // // move 5 from 2 to 6
// // // move 1 from 9 to 3
// // // move 15 from 6 to 7
// // // move 6 from 6 to 7
// // // move 1 from 1 to 9
// // // move 5 from 6 to 2
// // // move 1 from 6 to 1
// // // move 6 from 5 to 8
// // // move 1 from 3 to 4
// // // move 1 from 9 to 7
// // // move 6 from 8 to 1
// // // move 3 from 4 to 6
// // // move 1 from 6 to 1
// // // move 3 from 5 to 2
// // // move 1 from 5 to 7
// // // move 5 from 1 to 5
// // // move 2 from 6 to 9
// // // move 2 from 9 to 2
// // // move 7 from 5 to 1
// // // move 1 from 5 to 7
// // // move 1 from 5 to 9
// // // move 20 from 7 to 1
// // // move 23 from 1 to 7
// // // move 1 from 1 to 2
// // // move 4 from 7 to 9
// // // move 4 from 9 to 8
// // // move 1 from 9 to 2
// // // move 16 from 7 to 6
// // // move 4 from 1 to 5
// // // move 9 from 7 to 6
// // // move 11 from 2 to 6
// // // move 1 from 1 to 9
// // // move 1 from 1 to 7
// // // move 1 from 8 to 2
// // // move 1 from 9 to 7
// // // move 4 from 5 to 2
// // // move 3 from 8 to 3
// // // move 2 from 2 to 4
// // // move 2 from 7 to 4
// // // move 4 from 4 to 9
// // // move 28 from 6 to 9
// // // move 5 from 2 to 7
// // // move 8 from 6 to 5
// // // move 6 from 2 to 6
// // // move 2 from 7 to 3
// // // move 5 from 5 to 7
// // // move 1 from 5 to 9
// // // move 14 from 9 to 4
// // // move 18 from 9 to 8
// // // move 5 from 6 to 4
// // // move 6 from 7 to 8
// // // move 1 from 2 to 6
// // // move 19 from 4 to 7
// // // move 1 from 2 to 5
// // // move 1 from 9 to 3
// // // move 2 from 5 to 2
// // // move 14 from 7 to 3
// // // move 1 from 5 to 3
// // // move 12 from 8 to 6
// // // move 6 from 6 to 5
// // // move 4 from 5 to 4
// // // move 21 from 3 to 4
// // // move 10 from 8 to 3
// // // move 2 from 3 to 2
// // // move 7 from 4 to 6
// // // move 2 from 8 to 1
// // // move 2 from 2 to 3
// // // move 5 from 7 to 2
// // // move 2 from 1 to 4
// // // move 3 from 3 to 7
// // // move 2 from 5 to 7
// // // move 2 from 2 to 7
// // // move 2 from 2 to 3
// // // move 7 from 4 to 1
// // // move 3 from 1 to 4
// // // move 3 from 2 to 5
// // // move 2 from 1 to 5
// // // move 7 from 4 to 3
// // // move 15 from 6 to 2
// // // move 1 from 1 to 4
// // // move 1 from 5 to 1
// // // move 14 from 3 to 1
// // // move 9 from 4 to 1
// // // move 5 from 7 to 1
// // // move 1 from 3 to 5
// // // move 1 from 4 to 2
// // // move 20 from 1 to 2
// // // move 17 from 2 to 5
// // // move 1 from 3 to 7
// // // move 5 from 7 to 3
// // // move 6 from 5 to 1
// // // move 3 from 3 to 2
// // // move 10 from 1 to 9
// // // move 3 from 5 to 6
// // // move 12 from 5 to 6
// // // move 1 from 5 to 1
// // // move 15 from 6 to 5
// // // move 13 from 5 to 3
// // // move 1 from 5 to 1
// // // move 10 from 3 to 2
// // // move 3 from 3 to 2
// // // move 1 from 5 to 3
// // // move 2 from 3 to 6
// // // move 1 from 3 to 4
// // // move 2 from 6 to 4
// // // move 3 from 4 to 2
// // // move 8 from 9 to 4
// // // move 8 from 4 to 8
// // // move 7 from 2 to 1
// // // move 5 from 8 to 7
// // // move 2 from 2 to 3
// // // move 13 from 1 to 2
// // // move 2 from 3 to 8
// // // move 2 from 9 to 7
// // // move 3 from 8 to 1
// // // move 2 from 1 to 2
// // // move 2 from 8 to 4
// // // move 6 from 7 to 2
// // // move 3 from 1 to 8
// // // move 1 from 7 to 5
// // // move 24 from 2 to 1
// // // move 2 from 8 to 5
// // // move 15 from 1 to 4
// // // move 1 from 5 to 8
// // // move 9 from 1 to 4
// // // move 2 from 8 to 5
// // // move 26 from 2 to 4
// // // move 1 from 5 to 8
// // // move 1 from 5 to 8
// // // move 50 from 4 to 1
// // // move 1 from 8 to 9
// // // move 1 from 4 to 6
// // // move 1 from 4 to 9
// // // move 22 from 1 to 5
// // // move 1 from 6 to 2
// // // move 1 from 5 to 8
// // // move 1 from 2 to 4
// // // move 1 from 8 to 1
// // // move 28 from 1 to 3
// // // move 2 from 9 to 4
// // // move 21 from 5 to 8
// // // move 1 from 1 to 8
// // // move 1 from 5 to 8
// // // move 1 from 5 to 7
// // // move 3 from 4 to 8
// // // move 1 from 7 to 9
// // // move 1 from 9 to 7
// // // move 20 from 8 to 4
// // // move 2 from 8 to 1
// // // move 1 from 7 to 6
// // // move 2 from 1 to 4
// // // move 27 from 3 to 1
// // // move 4 from 8 to 4
// // // move 1 from 6 to 9
// // // move 19 from 4 to 2
// // // move 5 from 2 to 5
// // // move 1 from 4 to 1
// // // move 1 from 9 to 2
// // // move 17 from 1 to 9
// // // move 1 from 3 to 8
// // // move 15 from 9 to 2
// // // move 2 from 4 to 8
// // // move 2 from 5 to 8
// // // move 2 from 5 to 9
// // // move 3 from 9 to 8
// // // move 9 from 1 to 2
// // // move 2 from 1 to 3
// // // move 4 from 4 to 5
// // // move 2 from 5 to 7
// // // move 1 from 8 to 5
// // // move 2 from 3 to 8
// // // move 4 from 5 to 2
// // // move 1 from 9 to 6
// // // move 5 from 8 to 5
// // // move 1 from 7 to 9
// // // move 29 from 2 to 3
// // // move 1 from 8 to 6
// // // move 1 from 9 to 7
// // // move 2 from 2 to 8
// // // move 2 from 5 to 2
// // // move 2 from 7 to 5
// // // move 4 from 5 to 9
// // // move 1 from 5 to 9
// // // move 10 from 3 to 4
// // // move 10 from 4 to 7
// // // move 1 from 3 to 4
// // // move 5 from 2 to 9
// // // move 5 from 8 to 6
// // // move 1 from 6 to 5
// // // move 2 from 6 to 3
// // // move 4 from 6 to 7
// // // move 1 from 5 to 2
// // // move 2 from 2 to 7
// // // move 5 from 7 to 8
// // // move 8 from 7 to 2
// // // move 6 from 8 to 7
// // // move 14 from 2 to 5
// // // move 3 from 7 to 3
// // // move 1 from 4 to 7
// // // move 2 from 7 to 2
// // // move 3 from 2 to 8
// // // move 3 from 8 to 5
// // // move 8 from 9 to 1
// // // move 3 from 7 to 2
// // // move 2 from 7 to 4
// // // move 17 from 3 to 6
// // // move 8 from 1 to 6
// // // move 16 from 5 to 2
// // // move 1 from 5 to 2
// // // move 1 from 3 to 1
// // // move 21 from 6 to 7
// // // move 1 from 4 to 8
// // // move 7 from 7 to 8
// // // move 1 from 1 to 3
// // // move 11 from 7 to 2
// // // move 7 from 2 to 6
// // // move 8 from 8 to 5
// // // move 2 from 7 to 4
// // // move 4 from 5 to 6
// // // move 8 from 2 to 8
// // // move 17 from 2 to 3
// // // move 4 from 5 to 3
// // // move 7 from 6 to 9
// // // move 2 from 6 to 9
// // // move 1 from 4 to 1
// // // move 1 from 4 to 2
// // // move 3 from 6 to 2
// // // move 1 from 6 to 8
// // // move 1 from 4 to 1
// // // move 1 from 7 to 5
// // // move 10 from 9 to 2
// // // move 1 from 5 to 6
// // // move 1 from 8 to 2
// // // move 1 from 1 to 4
// // // move 12 from 3 to 4
// // // move 1 from 6 to 2
// // // move 2 from 8 to 6
// // // move 1 from 1 to 2
// // // move 1 from 9 to 8
// // // move 2 from 8 to 7
// // // move 6 from 3 to 2
// // // move 1 from 3 to 5
// // // move 8 from 4 to 9
// // // move 22 from 2 to 9
// // // move 7 from 3 to 5
// // // move 3 from 8 to 2
// // // move 2 from 7 to 8
// // // move 3 from 6 to 9
// // // move 1 from 2 to 9
// // // move 1 from 6 to 2
// // // move 4 from 8 to 5
// // // move 5 from 5 to 9
// // // move 1 from 3 to 6
// // // move 1 from 5 to 6
// // // move 2 from 4 to 1
// // // move 2 from 2 to 4
// // // move 4 from 4 to 6
// // // move 1 from 1 to 5
// // // move 5 from 6 to 3
// // // move 35 from 9 to 1
// // // move 4 from 9 to 1
// // // move 1 from 4 to 7
// // // move 3 from 3 to 7
// // // move 37 from 1 to 7
// // // move 2 from 2 to 3
// // // move 3 from 3 to 7
// // // move 1 from 5 to 8
// // // move 2 from 1 to 8
// // // move 2 from 5 to 2
// // // move 1 from 6 to 9
// // // move 16 from 7 to 1
// // // move 5 from 1 to 5
// // // move 3 from 8 to 2
// // // move 10 from 7 to 9
// // // move 6 from 7 to 9
// // // move 3 from 2 to 1
// // // move 4 from 5 to 3
// // // move 2 from 1 to 2
// // // move 5 from 7 to 9
// // // move 5 from 7 to 9
// // // move 5 from 5 to 3
// // // move 8 from 3 to 7
// // // move 6 from 9 to 4
// // // move 8 from 7 to 3
// // // move 2 from 3 to 6
// // // move 1 from 6 to 7
// // // move 1 from 6 to 7
// // // move 5 from 4 to 9
// // // move 3 from 7 to 1
// // // move 2 from 2 to 8
// // // move 1 from 8 to 6
// // // move 6 from 1 to 8
// // // move 1 from 7 to 9
// // // move 1 from 3 to 9
// // // move 4 from 3 to 2
// // // move 8 from 1 to 6
// // // move 1 from 3 to 9
// // // move 5 from 8 to 4
// // // move 2 from 3 to 1
// // // move 1 from 8 to 2
// // // move 4 from 9 to 1
// // // move 2 from 1 to 5
// // // move 1 from 8 to 5
// // // move 11 from 9 to 5
// // // move 1 from 2 to 8
// // // move 10 from 5 to 4
// // // move 1 from 1 to 9
// // // move 3 from 5 to 4
// // // move 5 from 2 to 3
// // // move 1 from 5 to 1
// // // move 9 from 9 to 4
// // // move 1 from 6 to 7
// // // move 1 from 3 to 9
// // // move 4 from 3 to 1
// // // move 1 from 2 to 4
// // // move 1 from 1 to 4
// // // move 1 from 4 to 7
// // // move 5 from 1 to 3
// // // move 1 from 3 to 2
// // // move 1 from 8 to 3
// // // move 3 from 9 to 5
// // // move 1 from 2 to 9
// // // move 4 from 1 to 4
// // // move 1 from 7 to 4
// // // move 2 from 5 to 8
// // // move 1 from 7 to 6
// // // move 4 from 3 to 1
// // // move 1 from 5 to 8
// // // move 1 from 3 to 4
// // // move 22 from 4 to 1
// // // move 11 from 1 to 9
// // // move 2 from 1 to 4
// // // move 11 from 1 to 6
// // // move 8 from 6 to 7
// // // move 1 from 8 to 7
// // // move 7 from 9 to 2
// // // move 6 from 7 to 6
// // // move 2 from 4 to 9
// // // move 2 from 7 to 1
// // // move 14 from 6 to 3
// // // move 2 from 3 to 1
// // // move 3 from 6 to 7
// // // move 6 from 1 to 3
// // // move 8 from 9 to 6
// // // move 7 from 4 to 6
// // // move 7 from 6 to 8
// // // move 1 from 9 to 1
// // // move 2 from 9 to 8
// // // move 4 from 3 to 4
// // // move 1 from 8 to 4
// // // move 1 from 4 to 3
// // // move 6 from 3 to 7
// // // move 7 from 2 to 5
// // // move 8 from 4 to 6
// // // move 1 from 7 to 2
// // // move 1 from 5 to 7
// // // move 6 from 7 to 3
// // // move 1 from 7 to 1
// // // move 8 from 8 to 4
// // // move 8 from 4 to 2
// // // move 3 from 7 to 3
// // // move 6 from 5 to 6
// // // move 15 from 3 to 1
// // // move 21 from 6 to 1
// // // move 4 from 2 to 6
// // // move 5 from 6 to 5
// // // move 1 from 2 to 6
// // // move 1 from 4 to 5
// // // move 1 from 4 to 3
// // // move 1 from 8 to 6
// // // move 4 from 5 to 7
// // // move 18 from 1 to 4
// // // move 2 from 5 to 7
// // // move 6 from 7 to 6
// // // move 1 from 3 to 2
// // // move 6 from 1 to 2
// // // move 3 from 3 to 9
// // // move 3 from 9 to 4
// // // move 1 from 8 to 3
// // // move 1 from 6 to 5
// // // move 6 from 2 to 5
// // // move 1 from 5 to 9
// // // move 1 from 3 to 5
// // // move 2 from 6 to 8
// // // move 2 from 1 to 4
// // // move 5 from 4 to 6
// // // move 15 from 4 to 9
// // // move 5 from 9 to 1
// // // move 2 from 6 to 2
// // // move 6 from 6 to 3
// // // move 1 from 8 to 6
// // // move 6 from 5 to 9
// // // move 3 from 6 to 5
// // // move 2 from 4 to 7`;
let providedinstructions: string = `move 2 from 1 to 2
move 1 from 2 to 1
move 3 from 3 to 4`;

function instructionsParser(instructions: string): Array<Array<number>> {
    // iterateover a string
    let result: Array<Array<number>> = [];
    let subArray: Array<number> =  [];
    let regex: RegExp = /\d/;

    //iterate over instructions
    for (let i = 0; i < instructions.length; i++) {
        // while working on a given instruction populate the subarray
       
        if (regex.test(instructions[i])) {
            if (regex.test(instructions[i+1])) {
                let newString: string = instructions[i].concat(instructions[i+1])
                subArray.push(parseInt(newString));
                i++;
                continue;
            }
            subArray.push(parseInt(instructions[i]))
        }   
      
        if (subArray.length === 3) {
            result.push([...subArray]);
            subArray.length = 0;
        }
}
return result;
}

console.log(instructionsParser(providedinstructions))

/*
[P]     [C]         [M]            
[D]     [P] [B]     [V] [S]        
[Q] [V] [R] [V]     [G] [B]        
[R] [W] [G] [J]     [T] [M]     [V]
[V] [Q] [Q] [F] [C] [N] [V]     [W]
[B] [Z] [Z] [H] [L] [P] [L] [J] [N]
[H] [D] [L] [D] [W] [R] [R] [P] [C]
[F] [L] [H] [R] [Z] [J] [J] [D] [D]
 1   2   3   4   5   6   7   8   9 
*/
let a: Array<string> = ["F","H","B","V","R","Q","D","P"]
let b: Array<string> = ["L","D","Z","Q","W","V"]
let c: Array<string> = ["H","L","Z","Q","G","R","P","C"]
let d: Array<string> = ["R","D","H","F","J","V","B"]
let e: Array<string> = ["Z","W","L","C"]
let f: Array<string> = ["J","R","P","N","T","G","V","M"]
let g: Array<string> = ["J","R","L","V","M","B","S"]
let h: Array<string> = ["D","P","J"]
let i: Array<string> = ["D","C","N","W","V"]
let inputgrid: Array<Array<string>> = [[], a, b,c,d,e,f,g,h,i]
console.log(inputgrid)
for (let k = 1; k < inputgrid.length; k++) {
    console.log(inputgrid[k][inputgrid[k].length-1])

}

let thearrMoves: Array<Array<number>> = instructionsParser(providedinstructions);
console.log(thearrMoves);

function executeMoves(grid: any, arrMoves: any): string {
    let result: string = '';
    let reps: number = 0;
    let source: number = 0;
    let target: number = 0;
    let chunk: string[] = [];
    
    console.log(arrMoves)

    for (let j = 0; j < arrMoves.length; j++) {
        reps = arrMoves[j][0];
        source = arrMoves[j][1];
        target = arrMoves[j][2];
        console.log(reps)
        console.log(source)
        console.log(target)

        // part 1 code
        // while (reps > 0) {
        //     grid[target].push(grid[source].pop())
        //     reps--;
        // }

         // part 2 code
        while (reps > 0) {
            chunk.unshift(grid[source].pop());
            reps--;
        }
        console.log(chunk)
        grid[target].push(...chunk)
        chunk = [];

        // part 2 code
        // instead of a series of push pops
        // we need to splice from the end to the 
        // console.log(grid[source])
        // console.log(grid[target])
        // chunk = grid[source].splice(grid[source].length-reps, grid[source].length-1);
        // console.log(chunk)
   
        // grid[target].push(...chunk);
        // console.log(grid[source])
        // console.log(grid[target])
    }
    // push top box into result
    for (let k = 1; k < grid.length; k++) {
        console.log(grid[k][grid[k].length-1])
        result += grid[k][grid[k].length-1];
    }
    
    console.log(result)
    return result;
}

console.log(executeMoves(inputgrid, thearrMoves))