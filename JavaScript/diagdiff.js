//Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function diagonalDifference(a) {

    let forward = a.map((x,i) => {
        return (x[i]);
    })

    let backward = a.map((x,i) => {
        return (x.reverse()[i]);
    })

    let addForward = 0
    let addBackward = 0

    forward.map(x =>{
        addForward += x
    })

    backward.map(x =>{
        addBackward += x
    })

    return Math.abs(addForward - addBackward)
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
