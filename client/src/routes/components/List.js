import React from 'react';
import Entry from './Entry';
import Table from './Table';

const List = ({ items, character }) => {

	return (
		<div>
			{items && items.map(item => (
				<Entry key={items.indexOf(item)} move={item} character={character} />
			))}
			<Table />
		</div>
	);
};

export default List;