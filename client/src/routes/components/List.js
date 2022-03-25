import React from 'react';
import Entry from './Entry';

const List = ({ items, character }) => {

	return (
		<div>
			{items && items.map(item => (
				<Entry key={items.indexOf(item)} move={item} character={character} />
			))}
		</div>
	);
};

export default List;