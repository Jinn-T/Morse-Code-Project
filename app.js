const morseAlpha = {
    a: ".-",
    b: "-..",
    c: "-.-.",
    d: "-..",
    h: "....",
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
    "/": " ",
    " ": "/",
};
const alphaMorse = Object.entries(morseAlpha).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

console.log(morseAlpha);

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translate");
const resetBtn = document.querySelector(".reset");

translateBtn.addEventListener("click", (event) => {
    // grabbing the input value and storing in textInput
    let textInput = input.value.toLowerCase();

    // add an alert for an empty string

    console.log(/[./ -]/.test(textInput));
    // (/[.-/]/.test(textInput))
    // textInput.slice(0, 4).includes(".", "-", "/", " ")
    if (/[./-]/.test(textInput)) {
        const morseArr = textInput.split("/"); //split words with a slash /
        console.log("splitting morse words", morseArr);

        // map again for individual characters ("")
        const morse = morseArr.map((letter) => {
            return letter.split(" ");
        });
        console.log(morse);

        // matching our morse values with morse values in our object.
        // then outputting the key (which is our english letter)
        // const toEnglish = morse.map((letter) => {
        //     Object.values(morseAlpha).includes(letter);
        //     return Object.keys(morseAlpha).find(
        //         (key) => morseAlpha[key] === letter
        //     );
        // });
        // console.log(toEnglish);

        const toEnglish = morse.map((word) => {
            return word
                .map((letter) => {
                    return alphaMorse[letter];
                })
                .join("");
        });
        console.log("joining characters", toEnglish);

        // converting our english array to a string
        const engToString = toEnglish.join(" ");
        console.log(engToString);

        output.innerHTML = engToString;
    } else {
        const engArr = textInput.split("");
        console.log(engArr);

        // replacing english with morse

        const toMorse = engArr.map((letter) => {
            Object.keys(morseAlpha).includes(letter);
            return morseAlpha[letter];
        });
        console.log(toMorse);

        // converting morse array to string
        const morseToString = toMorse.join(" ");
        console.log(morseToString);

        //morse to output display
        output.innerHTML = morseToString;

        //not currently spacing between words // push array to empty string?
    }
});

// reset all displays
resetBtn.addEventListener("click", (event) => {
    input.value = "";
    output.innerHTML = "";
});
