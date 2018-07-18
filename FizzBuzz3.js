let i;
let limit = 1000;
if (process.argv.length > 2) {
    limit = process.argv[2];
} 
let rules = ['3','5','7','11','13','17'];
if (process.argv.length > 3) {
    rules = [];
    let j;
    for (j = 3; j<process.argv.length; j++) {
        rules.push(process.argv[j]);
    }
}

function extend(pointer, value, extension, input) {
    if ((pointer % value === 0) && (rules.indexOf(value)!== -1)) {
        input = input.concat(extension);
    }
}

for (i = 1; i<= limit; i++) {
    let output = '';
    extend(i,3,'Fizz',output);
    extend(i,5,'Buzz',output);
    extend(i,7,'Bang',output);
    if ((i%11 === 0) && (rules.indexOf('11') !== -1)) {
        output = 'Bong';
    }
    if ((i%13 === 0) && (rules.indexOf('13') !== -1)) {
        let j = 0;
        while ((j < output.length) && (output.charAt(j) !== 'B')) {
            j++;
        }
        output = ((output.slice(0,j)).concat('Fezz')).concat(output.slice(j,output.length));
    }
    if ((i%17 === 0) && (rules.indexOf('17') !== -1)) {
        let j = 0;
        let l = output.length;
        tempoutput = '';
        while (j*4 < l) {
            tempoutput = tempoutput.concat(output.slice(l - (j + 1)*4,l - j*4));
            j++;
        }
        output = tempoutput;
    }
    if (!output) {
        output = i;
    }
    console.log(output)

}

