function iconSize(shape) {
    switch (shape) {
        case "Circle":
            return `circle cx="150" cy="100" r="80"`;
            break;
        case "Square":
            return `rect x="75" y="30" width="150" height="150" dominant-baseline="middle"`;
            break;
        case "Triangle":
            return `polygon points="150 0, 350 300, -40 300"`;
            break;
        default:
            return `circle cx="150" cy="100" r="80"`;
    }
};


 function svgCreator(svgDetails) {
    return `<svg version="1.1" width="300" height="200" xmlns="htttp://www.w3.org/2000/svg">

            <${iconSize(svgDetails.shape)} fill="${svgDetails.color}" stroke="black"/>

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgDetails.textcolor}">${svgDetails.text}</text>
            </svg>`
};

module.exports = svgCreator;

