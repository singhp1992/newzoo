import React from 'react';
import Button from './Button';
import '../../styling/cards.css';


const CardBody = props => {
    console.log(props)
        return (
            <div className="card-body">
                <h2>{ props.name.first }</h2>
                {/* <p className="body-content">{ props.website }</p> */}
                <Button />
            </div>
        )
    }

export default CardBody