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
            if (result.types.indexOf('street_address') === 0){
                formattedAddress = result.address_components[0].long_name + result.address_components[1].long_name + result.address_components[4].long_name + result.address_components[6].long_name;
            }

            this.props.handleChange(result.name, result.formatted);
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
