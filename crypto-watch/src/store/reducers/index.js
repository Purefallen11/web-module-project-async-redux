import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS} from '../actions'

const initialState = {
	isLoading: false,
	cardsData: [],
	error: ''
}

export const cryptoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARDS_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case FETCH_CARDS_SUCCESS:
			return {
				...state,
				isLoading: false,
				cardsData: action.payload
			}
		default:
			return state
	}
}

