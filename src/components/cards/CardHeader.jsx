import React from 'react';
import '../../styling/cards.css';


const CardHeader = props => {

    const pic = props.image;
    var style = {
            backgroundImage: `url(` + pic + `)`,
    };

    return (
        <header style={style} className="card-header">
            {/* <h4 className="card-header-title">Preeti</h4> */}
        </header>
    )
}

export default CardHeader

//             backgroundImage: 'url(' + image + ')',
//                 <h4 className="card-header-title">{ name }</h4>


