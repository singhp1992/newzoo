import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import '../../styling/cards.css';


const Card = props => {
        return (
            <article className="card zoom">
                <CardHeader 
                    // category={ this.props.details.category} 
                    // image={ this.props.details.image } 
                />
                <CardBody 
                    name={ props.index.name } 
                    website={ props.index.website } 
                />
            </article>
        )
}

export default Card