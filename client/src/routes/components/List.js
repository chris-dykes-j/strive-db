import React from 'react';
import Entry from './Entry';

const List = ({ items }) => {

	return (
		<ul>
			{items && items.map(item => (
				<li key={items.indexOf(item)} ><Entry move={item} /></li>
			))}
		</ul>
	);
};

export default List;