/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() =>
{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.writeln(fileContents);
    document.close();
});

describe("DOM tests", () =>
{
    test("Expects content to change", () =>
    {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 exists", () =>
    {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});