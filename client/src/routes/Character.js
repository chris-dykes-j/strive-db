import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import MoveList from './components/MoveList';

const Character = () => {
	fetch("http://localhost:8000/ramlethal_valentine")
		.then(response => response.json())
		.then((jsonData) => {
			console.log(jsonData)
		})
		.catch((error) => {
			console.error(error)
		});
	return (
		<div>
			<Header title="Ramlethal" />
			<Image />
			<MoveList />
		</div>
	)
};

export default Character;
