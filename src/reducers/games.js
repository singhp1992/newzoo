import { FETCH_GAMES } from '../actions/games';

export default function (state =[], { type, payload }) {
    switch (type) {
        case FETCH_GAMES: 
            return payload

        default: 
            return state
    }
}