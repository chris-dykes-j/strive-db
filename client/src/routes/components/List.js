import React from 'react';

const List = ({ attacks }) => {

	return (
		<div>
			{attacks && attacks.map(attack => (
				<h3 key={attacks.indexOf(attack)}>{attack.move_name.replace("_", " ")}</h3>
			))}
		</div>
	);
};

List.defaultProps = {
	title: "List"
};

export default List;