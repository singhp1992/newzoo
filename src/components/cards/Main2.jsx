import React from 'react';
import Title from './Title';
import Card from './Card';
import '../../styling/cards2.css';

class Main2 extends React.Component {

    state = {
        games: []
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            // update the users state
            .then(data =>
                this.setState({
                    games: data,
                })
            )
    }

    render() {
        console.log(this.state)
        const games = this.state;
        return (
            <div>
                <header className="app-header"></header>
                <Title />
                <div className="app-card-list" id="app-card-list">
                    { this.state.games.map( game => {
                        return (
                            <div key={game.id}>
                                <p>Title{game.name}</p>
                            </div>
                            // below card will work once cards are aligned
                            // <Card 
                            //     key={ game.id }
                            //     index={ game }
                            //     details={ console.log(game)}
                            // />
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
