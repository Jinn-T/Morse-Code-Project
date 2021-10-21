import { morseAlpha, alphaMorse } from "./data/data";
import { englishToMorse, morseToEng } from "./functions/functions";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translate");
const resetBtn = document.querySelector(".reset");

console.log(morseAlpha);

translateBtn.addEventListener("click", () => {
    let textInput = input.value.toLowerCase();
    if (/[.-]/.test(textInput)) {
        output.innerHTML = morseToEng(textInput, alphaMorse);
    } else {
        output.innerHTML = englishToMorse(textInput, morseAlpha);
    }
});

// reset all displays
resetBtn.addEventListener("click", (event) => {
    input.value = "";
    output.innerHTML = "";
});
