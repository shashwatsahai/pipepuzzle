let utility = {};
utility.shuffle = function (array) {
    array.sort(() => Math.random() - 0.5);
}
utility.shuffle2d = function (array) {
    for (var i in array) {
        array[i].sort(() => Math.random() - 0.5);
    }
}

utility.shuffle2dArray = function (array, size) {

    for (var i = 0; i < 10; i++) {
        var k = Math.random();
        if (k <= 0.25) {
            console.log("left");
            array = utility.shiftLeft(array,size);
        } else if (k > 0.25 && k <= 0.5) {
            console.log("right");
            array = utility.shiftRight(array,size);
        } else if (k > 0.5 && k <= 0.75) {
            console.log("down");
            array = utility.shiftDown(array,size);
        } else {
            console.log("up");
            array = utility.shiftUp(array,size);
        }
    }

}
utility.shiftDown = (array,size) => {
    var jb;
    debugger;
    var puzzle = array,
        newPuzzle = [],
        newPuzzle1 = [],
        newPuzzle2 = [];
    for (var i = 0; i < size; i++) {
        newPuzzle[i] = [];
        newPuzzle1[i] = [];
        newPuzzle2[i] = [];
        for (var j = 0; j < size; j++) {
            if (puzzle[i][j] === " ") {
                jb = j;
            }
            newPuzzle[i].push(puzzle[i][j]);
        }
    }
    //console.log("state before keypress",newPuzzle)
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (j === jb)
                newPuzzle2[(i + 1) % size][j] = newPuzzle[i][j];
            else newPuzzle2[i][j] = newPuzzle[i][j]
        }
    }
    // console.log("state after keypress",newPuzzle2)
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            newPuzzle1[i][j] = newPuzzle2[i][j]
        }
    }

    return newPuzzle1;
}

utility.shiftUp = (array,size) => {
    var jb;
    var puzzle = array,
        newPuzzle = [],
        newPuzzle1 = [],
        newPuzzle2 = [];
    for (var i = 0; i < size; i++) {
        newPuzzle[i] = [];
        newPuzzle1[i] = [];
        newPuzzle2[i] = [];
        for (var j = 0; j < size; j++) {
            if (puzzle[i][j] === " ") {
                jb = j;
            }
            newPuzzle[i].push(puzzle[i][j]);
        }
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (j === jb)
                newPuzzle2[i][j] = newPuzzle[(i + 1) % size][j];
            else newPuzzle2[i][j] = newPuzzle[i][j]
        }
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            newPuzzle1[i][j] = newPuzzle2[i][j]
        }
    }

    return newPuzzle1;
}

utility.shiftRight = (array,size) => {
    var ib;
    var puzzle = array,
        newPuzzle = [],
        newPuzzle1 = [],
        newPuzzle2 = [];
    for (var i = 0; i < size; i++) {
        newPuzzle[i] = [];
        newPuzzle1[i] = [];
        newPuzzle2[i] = [];
        for (var j = 0; j < size; j++) {
            if (puzzle[i][j] === " ") {
                ib = i;
            }
            newPuzzle[i].push(puzzle[i][j]);
        }
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i === ib)
                newPuzzle2[i][j] = newPuzzle[i][(j + 1) % size];
            else newPuzzle2[i][j] = newPuzzle[i][j]
        }
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            newPuzzle1[i][j] = newPuzzle2[i][j]
        }
    }

    return newPuzzle1;
}
utility.shiftLeft = (array,size) => {
    var ib;
    var puzzle = array,
        newPuzzle = [],
        newPuzzle1 = [],
        newPuzzle2 = [];
    for (var i = 0; i < size; i++) {
        newPuzzle[i] = [];
        newPuzzle1[i] = [];
        newPuzzle2[i] = [];
        for (var j = 0; j < size; j++) {
            if (puzzle[i][j] === " ") {
                ib = i;
            }
            newPuzzle[i].push(puzzle[i][j]);
        }
    }
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i === ib)
                newPuzzle2[i][(j + 1) % size] = newPuzzle[i][j];
            else newPuzzle2[i][j] = newPuzzle[i][j]
        }
    }

    return newPuzzle2;
}
export default utility;