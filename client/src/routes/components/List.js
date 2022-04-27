import React, { useState } from 'react';
import Entry from './Entry';
import Table from './Table';

const List = ({ items, character }) => {
	const [table, setTable] = useState();
	const makeTable = e => {
		setTable = e.target.value;
		console.log(table);
	}
	return (
		<div>
			<h2>{table}</h2>
			{items && items.map(item => (
				<Entry key={items.indexOf(item)} move={item} character={character}
					sendData={makeTable} />
			))}
			<Table />
		</div>
	);
};

export default List;