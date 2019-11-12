import React from 'react';
import '../../styling/cards.css';


class CardHeader extends React.Component {
    render() {

        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };

        return (
            <header style={ style } className="card-header">
                <h4 className="card-header-title">{ name }</h4>
            </header>
        )
    }
}

export default CardHeader