import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import autocompleteHelper from '../../lib/autocomplete-helper.js';

class AutocompleteInput extends React.Component {

    componentDidMount () {

        const inputDOMElement = document.getElementById(this.props.id);


        let autocomplete = new google.maps.places.Autocomplete(inputDOMElement);

        autocomplete.addListener('place_changed', () => {

            let result = autocomplete.getPlace();


            autocompleteHelper(result, (formattedName, formattedAddress) => {


                this.props.handleChange(formattedName, formattedAddress);
            });
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
