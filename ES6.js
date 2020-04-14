

let changes = [];

class MyConsole {

    constructor() { }

    log(msg) {
        changes.push(msg);
        console.log("Log - " + msg);
    }

    history(args) {
        if (args === undefined) {
            console.log("All logs - " + histories.toString());
        } else {
            console.log("Single log - " + histories[args]);
        }
    }

    clearHistory() {
        changes = [];
        changes.toString;
    }

};

var project = new MyConsole();

