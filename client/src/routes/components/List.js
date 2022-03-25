import React from 'react';
import Entry from './Entry';

const List = ({ items }) => {

	return (
		<div>
			{items && items.map(item => (
				<Entry key={items.indexOf(item)} move={item} />
			))}
		</div>
	);
};

export default List;