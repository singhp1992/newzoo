import React from 'react';
import Button from './Button';
import '../../styling/cards.css';


const CardBody = props => {
        return (
            <div className="card-body">
                <h2>{ props.name }</h2>
                {/* <p className="body-content">{ this.props.text }</p> */}
                <Button />
            </div>
        )
    }

export default CardBody