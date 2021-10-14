const morseAlpha = {
    a: ".-",
    b: "-..",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "/": "/",
};

console.log(morseAlpha);

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translate");
const resetBtn = document.querySelector(".reset");

translateBtn.addEventListener("click", (event) => {
    // grabbing the input value and storing in textInput
    let textInput = input.value.toLowerCase();

    // const test = textInput.slice(0, 5);
    // console.log(test);
    if (textInput.slice(0, 4).includes("-", ".", "/", " ")) {
        //remove spaces with regex
        const morseArr = textInput.split("/");
        console.log("splitting morse words", morseArr);

        // const stringArr = morseArr.map(String);
        // console.log(stringArr);

        const toEnglish = morseArr.map((letter) => {
            Object.values(morseAlpha).includes(letter);
            return Object.keys(morseAlpha).find(
                (key) => morseAlpha[key] === letter
            );
        });
        console.log(toEnglish);
    }

    //

    //---------------------

    //

    // english to morse

    const engArr = textInput.split("");
    console.log(engArr);

    // replacing english with morse

    const toMorse = engArr.map((letter) => {
        Object.keys(morseAlpha).includes(letter);
        return morseAlpha[letter];
    });
    console.log(toMorse);

    // converting morse array to string
    const morseToString = toMorse.join("");
    console.log(morseToString);

    //morse to output display
    output.innerHTML = morseToString;
});

// reset all displays
resetBtn.addEventListener("click", (event) => {
    input.value = "";
    output.innerHTML = "";
});
