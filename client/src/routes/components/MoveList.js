import React from 'react';

const MoveList = () => {
	const attacks = ([
		"Dauro",
		"Erarlumo",
		"Sildo Detruo",
		"Bajoneto",
		"Agresa Ordono",
		"Sabrobato",
		"Calvados",
		"Mortobato",
	]);
	return (
		<div>
			{attacks.map(attack =>
				(<h3 key={attacks.indexOf(attack)}>{attack}</h3>))}
		</div>
	);
};

MoveList.defaultProps = {
	title: "Move List"
};

export default MoveList;