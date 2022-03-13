import React from 'react';

const MoveList = ({ title, attacks }) => {
	return (
		<div>
			<h2>{title}</h2>
			{attacks.map(attack =>
				(<h3 key={attacks.indexOf(attack)}>{attack}</h3>))}
		</div>
	);
};

MoveList.defaultProps = {
	title: "Move List"
};

export default MoveList;