import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import '../../styling/cards.css';


class Card extends React.Component {
    render() {
        return (
            <article className="card zoom">
                <CardHeader 
                    // category={ this.props.details.category} 
                    // image={ this.props.details.image } 
                />
                <CardBody 
                    // title={ this.props.games.title } 
                    // text={ this.props.details.text } 
                />
            </article>
        )
    }
}

export default Card