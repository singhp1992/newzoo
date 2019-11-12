import React from 'react';
import Title from './Title';
import Card from './Card';
import '../../styling/cards.css';


class Main extends React.Component {

    // state = {
    //     data: [
    //         {
    //             "category": "News",
    //             "title": "Game 1",
    //             "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    //             "image": "https://source.unsplash.com/user/erondu/600x400"
    //         },
    //         {
    //             "category": "Travel",
    //             "title": "Game 2",
    //             "text": "Learn our tips and tricks on living a nomadic lifestyle",
    //             "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    //         },
    //         {
    //             "category": "Development",
    //             "title": "Game 3",
    //             "text": "The first ever decoupled starter theme for React & the WP-API",
    //             "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    //         },
    //         {
    //             "category": "News",
    //             "title": "Game 4",
    //             "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    //             "image": "https://source.unsplash.com/user/erondu/600x400"
    //         },
    //         {
    //             "category": "Travel",
    //             "title": "Game 5",
    //             "text": "Learn our tips and tricks on living a nomadic lifestyle",
    //             "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    //         },
    //         {
    //             "category": "Development",
    //             "title": "Game 6",
    //             "text": "The first ever decoupled starter theme for React & the WP-API",
    //             "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    //         }
    //     ]
    // };

    // constructor(props) {
    //     // initial state
    //     super(props);

    //     this.state = {
    //         users: []
    //     }
    // }

    state = {
        isLoading: true,
        games: []
    }

    componentDidMount() {
        this.fetchUsers()
    }
    
    // fetchGames() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         //.then(parsedJSON => console.log(parsedJSON.results))
    //         //     parsedJSON.results.map( games => (
    //         //     {
    //         //         name: `${name.first} ${name.last}`
    //         //     }
    //         // )))
    //         .then(data => 
    //             this.setState({
    //                 users: data
    //     }))
    // }

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
                                <div key={ gameName }>
                                    <p>Title{ name }</p>
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
 

    // render() {
    //     return (
    //         <div>
    //             <header className="app-header"></header>
    //             <Title />
    //             <div className="app-card-list" id="app-card-list">
    //                 { }
    //                 {
    //                     Object
    //                         .keys(this.state.data)
    //                         .map(key => <Card 
    //                             key={ key } 
    //                             index={ key } 
    //                             details={ this.state.data[key] } 
    //                         />)
    //                 } 

    // games.map(game => <Card
    //     const { gameName, name } = game;
    //          key={ key }
    //          details={ this.state.data.keys}            
    //     />;
    //                     })
    //             </div>
    //         </div>
    //     )
    // }
}

export default Main

// change this.state.data to this.state.games if you uncomment out above state