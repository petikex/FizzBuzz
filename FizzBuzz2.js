var i;
var limit = 1000;
if (process.argv.length > 2) {
    limit = process.argv[2];
} 
for (i = 1; i<= limit; i++) {
    var output = "";
    if (i%3 == 0) {
        output = output.concat("Fizz");
    }
    if (i%5 == 0 ) {
        output = output.concat("Buzz");
    }
    if (i%7 == 0) {
        output = output.concat("Bang");
    }
    if (i%11 == 0) {
        output = "Bong";
    }
    if (i%13 == 0) {
        var j = 0;
        while ((j < output.length) && (output.charAt(j) != 'B')) {
            j++;
        }
        output = ((output.slice(0,j)).concat("Fezz")).concat(output.slice(j,output.length));
    }
    if (i%17 == 0 ) {
        var j = 0;
        var l = output.length;
        tempoutput = "";
        while (j*4 < l) {
            tempoutput = tempoutput.concat(output.slice(l - (j + 1)*4,l - j*4));
            j++;
        }
        output = tempoutput;
    }
    if (output == "") {
        output = i;
    }
    console.log(output)

}

