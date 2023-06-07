//<svg height="100" width="100">
//<${answers.shape} iconsize(${amsers.size}) stroke="black" stroke-width="3" fill="${answers.color}" />
//</svg> 

function iconSize(shape) {
    switch (shape) {
        case "Circle":
            return `circle cx="150" cy="100" r="80"`;
            break;
        case "Square":
            return `rect x="50" y="20" width="150" height="150"`;
            break;
        case "Triangle":
            return `cx="largesize" cy="largesize" r="something large"`;
            break;
        default:
            return `cx="smallsize" cy="smallsize" r="something small"`;
    }
};

export function svgCreator(svgDetails) {
    return `<svg version="1.1" width="300" height="200" xmlns="htttp://www.w3.org/2000/svg">

            <${iconSize(svgDetails.shape)} fill="${svgDetails.color}" stroke="black" stroke-width="3"/>

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgDetails.textcolor}">${svgDetails.text}</text>
            </svg>`
}