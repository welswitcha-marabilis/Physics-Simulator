const size = document.querySelector("#size");
const mass = document.querySelector("#mass");
const friction = document.querySelector("#friction");
const restitution = document.querySelector("#restitution");

const sliders = [size, mass, friction, restitution];

const sizeValueDisplay = document.querySelector("#size-value");
const massValueDisplay = document.querySelector("#mass-value");
const frictionValueDisplay = document.querySelector("#friction-value");
const restitutionValueDisplay = document.querySelector("#restitution-value");

const values = [sizeValueDisplay, massValueDisplay, frictionValueDisplay, restitutionValueDisplay];

sliders.forEach((slider, index) => {
    slider.addEventListener("input", () => {
        values[index].value = slider.value;
    });
});

values.forEach(text => {
    text.addEventListener("focus", () => {
        // select text makes it easier for the user to change the value, because
        // they can just type a new number without having to delete the old one first
        text.select();
    });
    text.addEventListener("input", () => {
        if (isNaN(text.value)) {
            text.value = 0;
            alert("I do not know how to read");
        }
    })
})