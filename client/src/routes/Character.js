import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import MoveList from './components/MoveList';

const Character = () => {
	let attacks = [];
	fetch("http://localhost:8000/ramlethal_valentine")
		.then(response => response.json())
		.then((attackData) => {
			attackData.forEach(element => attacks.push(element["move_name"]))
		})
		.catch((error) => console.error(error));
	console.log(attacks);
	return (
		<div>
			<Header title="Ramlethal" />
			<Image />
			<MoveList />
		</div>
	)
};

export default Character;


