import React from 'react';
import { connect } from 'react-redux'



const CryptoComponent = (props) => {
	return (
		<div>
			{props.cardData.map((cards) => {
				return (	
					<div>
						<h2>Magic The Gathering</h2>
						{props.isLoading ? <p>Data is loading...</p> : null}
						{props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
						<h4>{cards.cards.name}</h4>
						<p>{cards.cards.imageUrl}</p>
						<p>{cards.cards.manaCost}</p>
						<p>{cards.cards.colors}</p>
					</div>
				)
			})}
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

export default connect(mapStateToProps)(CryptoComponent);