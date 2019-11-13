import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import '../../styling/cards.css';


const Card = props => {
        return (
            <article className="card zoom">
                <CardHeader 
                    // category={ this.props.details.category} 
                    image={ props.image.large } 
                />
                <CardBody 
                    name={ props.details } 
                    location={ props.location } 
                />
            </article>
        )
}

export default Card