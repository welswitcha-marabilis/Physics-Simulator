// adds the buttons the user selects to add shapes

// data fetching section
const buttonsData = fetch("./typeofshape-buttons.json");

buttonsData.then(response => response.json()).then(JSON => {return JSON});

const buttons = buttonsData.then(shapes => {return JSON.parse(JSON.stringify(shapes))});


// variable declatations:
const buttonsContainer = document.querySelector(".buttons-container");
const buttonTypes = ["circle", "box"];

// button class

class Button {
    constructor(type, data) {
        this.type = type;
        this.proportionalSize = data.proportionalSize;
        this.backgroundColor = data.backgroundColor;
        this.border = data.border;
        this.active = data.active;
        // I use a div for a special kind of interaction that doesnt require
        // a button element
        this.button = document.createElement("div");
    }
}






