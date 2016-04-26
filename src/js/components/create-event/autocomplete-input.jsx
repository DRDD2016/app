import React from 'react';
import ReactDOM from 'react-dom';

class AutocompleteInput extends React.Component {

    componentDidMount () {

        const inputDOMElement = document.getElementById(this.props.id);

        const options = {
            componentRestrictions: {
                country: 'uk'
            }
        };
        let autocomplete = new google.maps.places.Autocomplete(inputDOMElement,options);

        autocomplete.addListener('place_changed', () => {

            let result = autocomplete.getPlace();

            this.props.handleInput(result.name, result.formatted_address);
        });
    }
    render () {
        const { handleInput, value, placeholder, id } = this.props;

        return (
            <div>
                <input
                    onChange={ (e) => handleInput(e.target.value, "")}
                    ref="searchField"
                    id={ id }
                    defaultValue={ value }
                    type="text"
                    placeholder={ placeholder } />
            </div>
        );
    }
}


export default AutocompleteInput;
