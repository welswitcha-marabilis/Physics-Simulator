// adds the buttons the user selects to add shapes

// data fetching section
const buttonsData = fetch("./typeofshape-buttons.json");

let buttonStyles = null;
buttonsData.then(response => response.text()).then(text => {return JSON.parse(text)}).then(data => {
    buttonStyles = data;
    createButtons();
});


// variable declatations:
const buttonsContainer = document.querySelector(".buttons-container");
const buttons = [];
const buttonTypes = ["circle", "box"];

// button class

class Button {
    constructor(type, data, container) {
        this.type = type;
        this.container = container ?? buttonsContainer;
        this.active = false;
        // I use a div for a special kind of interaction that doesnt require
        // a button element
        this.button = document.createElement("div");
        this.buttonShape = document.createElement("div");
        this.shapeType = null;
        this.button.className = "button";

        this.button.appendChild(this.buttonShape);
        this.container.appendChild(this.button);
        
        this.button.style.width = data.size;
        this.button.style.height = data.size;
        this.button.style.marginTop = data.marginTop;
        this.button.style.borderRadius = data.borderRadius;
        this.button.style.backgroundColor = data.backgroundColor;
        this.button.style.border = data.border;
        this.button.style.cursor = "pointer";
        switch (this.type) {
            case "circle":
                this.buttonShape.style.width = parseFloat(data.size) * data.circle.proportionalSize + "px";
                this.buttonShape.style.height = parseFloat(data.size) * data.circle.proportionalSize + "px";
                this.buttonShape.style.backgroundColor = data.circle.backgroundColor;
                this.buttonShape.style.borderRadius = data.circle.borderRadius;
                this.buttonShape.style.border = data.circle.border;
                this.buttonShape.style.margin = "auto";
                this.buttonShape.style.marginTop = parseFloat(data.size) * (1 - data.circle.proportionalSize) / 2 + "px";
                this.button.id = "circlebtn";
                break;
            case "box":
                this.buttonShape.style.width = parseFloat(data.size) * data.box.proportionalSize + "px";
                this.buttonShape.style.height = parseFloat(data.size) * data.box.proportionalSize + "px";
                this.buttonShape.style.backgroundColor = data.box.backgroundColor;
                this.buttonShape.style.border = data.box.border;
                this.buttonShape.style.margin = "auto";
                this.buttonShape.style.marginTop = parseFloat(data.size) * (1 - data.box.proportionalSize) / 2 + "px";
                this.button.id = "boxbtn";
                break;
            default:
                console.error("Unknown button type: " + this.type + ". Replacing with orange box.");
                this.buttonShape.style.backgroundColor = "#ffa300";
                this.buttonShape.style.width = parseFloat(data.size) * data.box.proportionalSize + "px";
                this.buttonShape.style.height = parseFloat(data.size) * data.box.proportionalSize + "px";
                this.buttonShape.style.border = data.box.border;
                this.buttonShape.style.margin = "auto";
                this.buttonShape.style.marginTop = parseFloat(data.size) * (1 - data.box.proportionalSize) / 2 + "px";
                this.button.id = "unknownbtn";
        }
        this.button.addEventListener("click", () => {
        if (!this.active) {
            const activeButton = buttons.find(button => button.active === true);
            if (activeButton) {
                activeButton.active = false;
                activeButton.button.style.border = data.border;
                activeButton.button.style.boxShadow = "none";
            }
            this.active = true;
            this.button.style.border = data.active.border;
            this.button.style.boxShadow = data.active.boxShadow;
        }
        else {
            this.active = false;
            this.button.style.border = data.border;
            this.button.style.boxShadow = "none";
        }
        });
    }
}

function createButtons() {
    buttonTypes.forEach(type => { buttons.push(new Button(type, buttonStyles, buttonsContainer)); });
}







