import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class AutocompleteInput extends React.Component {

    componentDidMount () {

        const inputDOMElement = document.getElementById(this.props.id);

        const options = {
            componentRestrictions: {
                country: 'uk'
            }
        };
        let autocomplete = new google.maps.places.Autocomplete(inputDOMElement, options);

        autocomplete.addListener('place_changed', () => {

            let result = autocomplete.getPlace();

            this.props.handleChange(result.name, result.formatted_address);
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
                    onChange={ (e) => handleChange(e.target.value, "")}
                    ref="searchField"
                    id={ id }
                    value={ value }
                    type="text"
                    placeholder={ placeholder } />

                <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                    <i className="icon remove" />
                </div>
            </div>
        );
    }
}


export default AutocompleteInput;
