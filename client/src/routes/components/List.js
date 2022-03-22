import React from 'react';

const List = ({ items }) => {
	return (
		<ul>
			{items && items.map(item => (
				<li key={items.indexOf(item)}>{item}</li>
			))}
		</ul>
	);
};

export default List;