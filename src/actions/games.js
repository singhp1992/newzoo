export const FETCH_GAMES = 'FETCH_GAMES';

const fetchGames = games => ({
    type: FETCH_GAMES,
    payload: games
})