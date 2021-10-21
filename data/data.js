export const morseAlpha = {
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
    "/": " ",
    " ": "/",
};
console.log(Object.entries(morseAlpha));
// use reduce so we can change an array to a different value e.g object
export const alphaMorse = Object.entries(morseAlpha).reduce(
    (acc, [key, value]) => {
        // 1st iteration key = "a", value = ".-"
        acc[value] = key;
        return acc;
    },
    {}
); // here we are settine the staring value as an empty object
