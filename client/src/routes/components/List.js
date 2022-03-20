import React from 'react';

const List = ({ attacks }) => {
	return (
		<ul>
			{attacks && attacks.map(attack => (
				<li key={attacks.indexOf(attack)}>{attack.move_name.replace("_", " ")}</li>
			))}
		</ul>
	);
};

List.defaultProps = {
	title: "List"
};

export default List;