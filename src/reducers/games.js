import { FETCH_GAMES } from '../actions/games';

export default function (state =[], { type, payload }) {
    switch (type) {
        case FETCH_GAMES: 
            return payload

        default: 
            return state
    }
}

const initialState = [
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
];

// export default function Games(state=initialState, action) {
//     switch(action.type) {
//         case FETCH_GAMES: 
//             return[
//                 ...state,
//                 {
//                     title: action.title
//                 }
//             ];

//             default: 
//             return state;
//     }
// }