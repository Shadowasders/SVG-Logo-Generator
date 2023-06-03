//<svg height="100" width="100">
//<${answers.shape} iconsize(${amsers.size}) stroke="black" stroke-width="3" fill="${answers.color}" />
//</svg> 

function iconSize(size) {
    switch (size) {
        case "small":
            return `cx="smallsize" cy="smallsize" r="something small"`;
            break;
        case "medium":
            return `cx="midsize" cy="midsize" r="something mid"`;
            break;
        case "large":
            return `cx="largesize" cy="largesize" r="something large"`;
            break;
        default:
            return `cx="smallsize" cy="smallsize" r="something small"`;
    }
};

export function svgCreator(svgDetails) {
    return `<svg height="100" width="100">
            <${svgDetails.shape} ${iconSize(svgDetails.size)} stroke="black" stroke-width="3" fill="${svgDetails.color}" />
            </svg>`
}