var i;
for (i = 1; i<= 100; i++) {
    var output = "";
    if (i%3 == 0) {
        output = output.concat("Fizz");
    }
    if (i%5 == 0 ) {
        output = output.concat("Buzz");
    }
    if (output == "") {
        output = i;
    }
    console.log(output)

}