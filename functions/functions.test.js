import { describe } from "yargs";
import { englishToMorse, morseToEng } from "./functions.js";

describe("Test cases for english to morse translation", () => {
    it("should return correct translated character from english to morse", () => {
        expect(englishToMorse("a", morseAlpha).toBe(".-"));
        expect(englishToMorse("g", morseAlpha).toBe("--."));
        expect(englishToMorse("x", morseAlpha).toBe("-..-"));
        expect(englishToMorse("u", morseAlpha).toBe("..-"));
    });
});
describe("Test cases from morse to english translation", () => {
    it("should return correct translated character from morse to english", () => {
        expect(morseToEng("-..", alphaMorse).toBe("b"));
        expect(morseToEng("-", alphaMorse).toBe("t"));
        expect(morseToEng(".---", alphaMorse).toBe("j"));
        expect(morseToEng("..-.", alphaMorse).toBe("f"));
    });
});

describe("Test cases for invalid characters", () => {
    it("should return an alert if an invalid character is inputted", () => {
        expect(morseToEng("&", morseAlpha).toBe(alert()));
        expect(morseToEng("+", morseAlpha).toBe(alert()));
        expect(morseToEng("!", alphaMorse).toBe(alert()));
        expect(morseToEng("*", alphaMorse).toBe(alert()));
    });
});

describe("Test cases for seperation between words", () => {
    it("should seperate words with a " / " ", () => {
        expect(
            morseToEng(
                ".... . .-.. .-.. --- / -- -.-- / -. .- -- . / .. ... / .--- .. -. -.",
                alphaMorse
            ).toBe("hello my name is jinn")
        );
        expect(morseToEng(".- / .-- --- .-. -..", alphaMorse).toBe("a word"));
        expect(morseToEng(".... .. / -.. -.-- .", alphaMorse).toBe("hi bye"));
    });
});
