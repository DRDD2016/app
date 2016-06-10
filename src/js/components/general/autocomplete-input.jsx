import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class AutocompleteInput extends React.Component {

    componentDidMount () {

        const inputDOMElement = document.getElementById(this.props.id);


        let autocomplete = new google.maps.places.Autocomplete(inputDOMElement);

        autocomplete.addListener('place_changed', () => {

            let result = autocomplete.getPlace();

            let formattedAddress;
            let formattedName;
            if (result.types.indexOf('street_address') >= 0){
                formattedName = result.address_components[0].long_name + ' ' + result.address_components[1].long_name;
                formattedAddress = result.address_components[4].long_name + ' ' + result.address_components[6].long_name;
            }
            if (result.types.indexOf('premise') >= 0 || result.types.indexOf('stadium') >= 0 || result.types.indexOf('point_of_interest') >= 0){
                let postcodeObject = result.address_components.length - 1;
                let cityObject = result.address_components.length - 3;
                formattedName = result.name;
                formattedAddress = result.address_components[cityObject].long_name + ' ' + result.address_components[postcodeObject].long_name;
            }
            if (result.types.indexOf('locality') >= 0 || result.types.indexOf('political') >= 0){
                let CountryObject = result.address_components.length - 1;
                if ( result.address_components[CountryObject].long_name !== "United Kingdom") {
                    formattedName = result.name;
                    formattedAddress = result.address_components[CountryObject].long_name;
                } else {
                    formattedName = result.name;
                    formattedAddress = '';
                }
            }
            if (result.types.indexOf('country') >= 0){
                formattedName = result.name;
                formattedAddress = '';
            } 

            console.log(result);
            this.props.handleChange(formattedName, formattedAddress);
        });
    }

    render () {
        const { handleChange, value, placeholder, id, inputKey, removeInput } = this.props;

        let removeInputClasses = classnames("one column", {
            "display-none": inputKey === 0
        });

        return (
            <div className="row">
                <input
                    className="eleven columns"
                    onChange={ (e) => handleChange(e.target.value, "") }
                    ref="searchField"
                    id={ id }
                    value={ value }
                    type="text"
                    placeholder={ placeholder } />

                <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                    <i className="fa fa-times" ariaHidden="true" />
                </div>
            </div>
        );
    }
}


export default AutocompleteInput;
