import React from 'react';
import '../../styling/cards.css';

class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> 
                Game Details
            </button>
        )
    }
}

export default Button