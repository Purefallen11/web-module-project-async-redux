import React, {useEffect} from 'react';
import { connect } from 'react-redux'

import { getCards } from '../store/actions'


const CryptoComponent = (props) => {

	useEffect(() => {
		props.getCards()
	},[])

	return (
		<div>
			<h2>Magic The Gathering</h2>
			{props.isLoading ? <p>Data is loading...</p> : null}
			{props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}		
			{props.cardsData.map((cards) => (	
				<div>
					<h4>{cards.name}</h4>
					<img src={cards.imageUrl} alt='pretty cardboard' />
					<p>{cards.manaCost}</p>
					<p>{cards.colors}</p>
				</div>
			))}	
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		cardsData: state.cardsData,
		error: state.error
	}
}

export default connect(mapStateToProps, {getCards})(CryptoComponent);