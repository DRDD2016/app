import React from 'react';
import ReactDOM from 'react-dom';

class AutocompleteInput extends React.Component {
    componentDidMount () {
        const inputDOMElement = document.getElementById(this.props.id);
        const options = { componentRestrictions: {
            country: 'uk'
        }};
        new google.maps.places.Autocomplete(inputDOMElement,options);

    }
    render () {
        const { handleInput, value, placeholder, id } = this.props;

        return (
            <div>
                <input
                    ref="searchField"
                    id={ id }
                    defaultValue={ value }
                    onChange={ handleInput }
                    type="text"
                    placeholder={ placeholder } />
            </div>
        );
    }
}


export default AutocompleteInput;
