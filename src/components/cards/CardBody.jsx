import React from 'react';
import Button from './Button';
import '../../styling/cards.css';


const CardBody = props => {
    console.log(props)
        return (
            <div className="card-body">
                <h2>{ props.name.first } { props.name.last }</h2>
                <p className="body-content">{ props.location.state }</p>
                <Button />
            </div>
        )
    }

export default CardBody