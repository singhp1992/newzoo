import React from 'react'
import '../../styling/cards.css';
class Title extends React.Component {
    render() {
        return <section className="app-title">
            <div className="app-title-content">
                <h1>Games</h1>
                <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
            </div>
        </section>
    }
}

export default Title