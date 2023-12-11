const decimalPlace = 2;

let capitalize=(str)=>{
    return str[0].toUpperCase() + str.slice(1);
}
let convertDeciToFeet = (decimeters) => {
    let meters = decimeters / 10;
    return (meters * 3.28084).toFixed(decimalPlace);
};

let convertHectoToLbs = (hectograms) => {
    return (hectograms / 4.5359237).toFixed(decimalPlace);
};

export {
    capitalize,convertDeciToFeet,convertHectoToLbs
}