import axios from 'axios'
export const FETCH_CARDS_START = 'FETCH_CARDS_START'
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS'

export const getCards = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CARDS_START });

		axios
			.get('https://api.magicthegathering.io/v1/cards')
			.then(res => {
				dispatch({type:FETCH_CARDS_SUCCESS, payload: res.data.cards})
				})
			.catch(err => { console.log(err.message) })
		
	};
};