import React from "react";
import Header from "./components/Header.js";

const Home = () => {
	return (
		<div>
			<Header title="Character Select" />
			<a href="/ramlethal">Ramlethal</a>
			<br />
			<a href="/may">May</a>
			<br />
			<a href="/baiken">Baiken</a>
		</div>
	)
};

export default Home;