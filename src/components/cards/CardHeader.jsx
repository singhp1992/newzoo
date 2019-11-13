import React from 'react';
import '../../styling/cards.css';


const CardHeader = props => {

    const pic = props.image;
    // var style = {
    //         backgroundImage: `url(` + pic + `)`,
    // };

    return (
        <div className="card-header">
            <img className="user-img" src= {props.image} />
            {/* <h4 className="card-header-title">Preeti</h4> */}
        </div>
    )
}

export default CardHeader
// style = { style } 
//             backgroundImage: 'url(' + image + ')',
//                 <h4 className="card-header-title">{ name }</h4>


