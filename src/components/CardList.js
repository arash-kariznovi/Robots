import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardComponents = robots.map((robo, i) => {
		return <Card key={i}
			id={robots[i].id}
			email={robots[i].email}
			name={robots[i].name} />
	})
	return (
		<div className="flex justify-center align-items flex-wrap" >
			{ cardComponents}
		</div>
	);
}

export default CardList;