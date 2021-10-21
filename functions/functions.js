export const englishToMorse = (string, object) => {
    return string
        .split("")
        .map((letter) =>
            !Object.keys(object).includes(letter)
                ? alert("Please enter a valid character")
                : object[letter]
        )
        .join(" ");
};

export const morseToEng = (string, object) => {
    return string
        .split(" ")
        .map((letter) => object[letter])
        .join("");
};
