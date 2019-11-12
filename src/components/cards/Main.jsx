import React from 'react';
import Title from './Title';
import Card from './Card';
import '../../styling/cards.css';

const GameData = [
    {
        "category": "News",
        "title": "Game 1",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Game 2",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "Game 3",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
        "category": "News",
        "title": "Game 4",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Game 5",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "Game 6",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
]


class Main extends React.Component {

    // state = {
    //     data: [
            // {
            //     "category": "News",
            //     "title": "Game 1",
            //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
            //     "image": "https://source.unsplash.com/user/erondu/600x400"
            // },
            // {
            //     "category": "Travel",
            //     "title": "Game 2",
            //     "text": "Learn our tips and tricks on living a nomadic lifestyle",
            //     "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
            // },
            // {
            //     "category": "Development",
            //     "title": "Game 3",
            //     "text": "The first ever decoupled starter theme for React & the WP-API",
            //     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
            // },
            // {
            //     "category": "News",
            //     "title": "Game 4",
            //     "text": "CNN purchased Casey Neistat's Beme app for $25million.",
            //     "image": "https://source.unsplash.com/user/erondu/600x400"
            // },
            // {
            //     "category": "Travel",
            //     "title": "Game 5",
            //     "text": "Learn our tips and tricks on living a nomadic lifestyle",
            //     "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
            // },
            // {
            //     "category": "Development",
            //     "title": "Game 6",
            //     "text": "The first ever decoupled starter theme for React & the WP-API",
            //     "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
            // }
    //     ]
    // };

    // constructor() {
    //     super();

    //     this.state = {
    //         games: {}
    //     }
    // }
    // componentWillMount() {
    //     this.setState({
    //         games: GameData
    //     });
    // }


    render() {
        return (
            <div>
                <header className="app-header"></header>
                <Title />
                <div className="app-card-list" id="app-card-list">
                    {
                        Object
                            .keys(this.state.data)
                            .map(key => <Card 
                                key={ key } 
                                index={ key } 
                                details={ this.state.data[key] } 
                            />)
                    }
                </div>
            </div>
        )
    }
}

export default Main

// change this.state.data to this.state.games if you uncomment out above state