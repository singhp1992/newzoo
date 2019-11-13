import React from 'react';
import Title from './Title';
import Card from './Card';
import '../../styling/cards2.css';

class Main2 extends React.Component {

    state = {
        users: []
    }

    async componentDidMount(){
        const url = 'https://randomuser.me/api/?results=5';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            users: data.results
        })
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                <header className="app-header"></header>
                <Title />
                <div className="app-card-list" id="app-card-list">
                   { this.state.users.map( (user, i) => {
                        return (
                            <Card 
                                key={ i }
                                // index={ user }
                                details={ user.name }
                                location={ user.location }
                                image={ user.picture }
                            />
                        );
                    })} 
                </div>
             </div>
            );
    }
}

export default Main2


// next
// 1. alter card and card header to show the game.name / game.address etc 
// 2. add static image to make cardbody stand
// 3. reducers? what
// 4. use routing to go to individual pages 
// 5. add actions => fetch game etc 
// 6. combineReducers? what it do?
