import React from 'react';
import '../../styling/all-cards.scss';
class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
      </button>
        )
    }
}

export default Button