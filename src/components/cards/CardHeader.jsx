import React from 'react';
import '../../styling/cards.css';


class CardHeader extends React.Component {
    render() {

        // const { image, category } = this.props;
        const image = `https://i.pinimg.com/originals/a2/ed/a0/a2eda069ffd338e652d768792686b2a5.jpg`
        var style = {
            backgroundImage: 'url(' + image + ')',
        };

        return (
            <header style={ style } className="card-header">
                <h4 className="card-header-title">Preeti</h4>
            </header>
        )
    }
}

export default CardHeader

//             backgroundImage: 'url(' + image + ')',
//                 <h4 className="card-header-title">{ name }</h4>


