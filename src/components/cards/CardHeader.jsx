import React from 'react';
import '../../styling/all-cards.scss';

class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="card-header">
                <h4 className="card-header--title">{category}</h4>
            </header>
        )
    }
}

export default CardHeader