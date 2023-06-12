const svgCreator = require('./generateSvg.js');

describe('generateSvg', () => {
    //testing the shape generation function
    describe('shape creation', () => {
        it('should return working SVG code w/the parameters provided', () => {
            const createdSvg = svgCreator(
                {
                    shape: "Circle",
                    color: "red",
                    textcolor: "white",
                    text: "???"
                }
            );
            expect(createdSvg).toBe(`<svg version="1.1" width="300" height="200" xmlns="htttp://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="red" stroke="black"/>

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">???</text>
            </svg>`);
        });
    });
});