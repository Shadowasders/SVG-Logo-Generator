function iconSize(shape) {
    switch (shape) {
        case "Circle":
            return `circle cx="150" cy="100" r="80"`;
            break;
        case "Square":
            return `rect x="50" y="20" width="150" height="150"`;
            break;
        case "Triangle":
            return `polygon points="50 15, 100 100, 0 100"`;
            break;
        default:
            return `cx="smallsize" cy="smallsize" r="something small"`;
    }
};

 function svgCreator(svgDetails) {
    return `<svg version="1.1" width="300" height="200" xmlns="htttp://www.w3.org/2000/svg">

            <${iconSize(svgDetails.shape)} fill="${svgDetails.color}" stroke="black" stroke-width="3"/>

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgDetails.textcolor}">${svgDetails.text}</text>
            </svg>`
};

module.exports = svgCreator;

