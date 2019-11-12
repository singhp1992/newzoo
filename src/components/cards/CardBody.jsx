import React from 'react';
import Button from './Button';
import '../../styling/cards.css';


class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <h2>{ this.props.name }</h2>
                {/* <p className="body-content">{ this.props.text }</p> */}
                <Button />
            </div>
        )
    }
}

export default CardBody