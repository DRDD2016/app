
export default function autocompleteHelper (result, callback) {
    let formattedAddress;
    let formattedName;
    if (result.types.indexOf('street_address') >= 0){
        formattedName = result.address_components[0].long_name + ' ' + result.address_components[1].long_name;
        formattedAddress = result.address_components[4].long_name + ' ' + result.address_components[6].long_name;
        callback(formattedName, formattedAddress);
    }
    else if (result.types.indexOf('premise') >= 0 || result.types.indexOf('stadium') >= 0 || result.types.indexOf('point_of_interest') >= 0){
        let postcodeObject = result.address_components.length - 1;
        let cityObject = result.address_components.length - 4;
        formattedName = result.name;
        formattedAddress = result.address_components[cityObject].long_name + ' ' + result.address_components[postcodeObject].long_name;
        callback(formattedName, formattedAddress);
    }
    else if (result.types.indexOf('neighborhood') >= 0){
        let postcodeObject = result.address_components.length - 1;
        let cityObject = result.address_components[1];
        formattedName = result.name;
        formattedAddress = cityObject.long_name + ' ' + result.address_components[postcodeObject].long_name;
        callback(formattedName, formattedAddress);
    }
    else if (result.types.indexOf('locality') >= 0 || result.types.indexOf('political') >= 0){
        let CountryObject = result.address_components.length - 1;
        if ( result.address_components[CountryObject].long_name !== "United Kingdom") {
            formattedName = result.name;
            formattedAddress = result.address_components[CountryObject].long_name;
            callback(formattedName, formattedAddress);
        } else {
            formattedName = result.name;
            formattedAddress = '';
            callback(formattedName, formattedAddress);
        }
    }
    else if (result.types.indexOf('country') >= 0){
        formattedName = result.name;
        formattedAddress = '';
        callback(formattedName, formattedAddress);
    }
    else {
        let postcodeObject = result.address_components.length - 1;
        formattedName = result.name;
        formattedAddress = result.address_components[postcodeObject].long_name;
        callback(formattedName, formattedAddress);
    }
}
