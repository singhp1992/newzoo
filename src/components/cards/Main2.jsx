import React from 'react';
import Title from './Title';
import Card from './Card';
import '../../styling/cards.css';

class Main2 extends React.Component {

    state = {
        isLoading: true,
        games: []
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers() {
        // Where we're fetching data from
        fetch(`https://jsonplaceholder.typicode.com/users`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({
                    games: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { isLoading, games } = this.state;
        return (
            <div>
                <header className="app-header"></header>
                <Title />
                <div className="app-card-list" id="app-card-list">
                    {}
                    {!isLoading ? (
                        games.map(game => {
                            const { gameName, name } = game;
                            return (
                                <div className="card zoom card-body" key={gameName}>
                                    <p>Name: {name}</p>
                                </div>
                            );
                        })
                    ) : (
                            <h3>Loading...</h3>
                        )}
                </div>
            </div>
        );
    }


    // games.map(game => <Card
    //     const { gameName, name } = game;
    //          key={ key }
    //          details={ this.state.data.keys}            
    //     />;
}

export default Main2

// change this.state.data to this.state.games if you uncomment out above state