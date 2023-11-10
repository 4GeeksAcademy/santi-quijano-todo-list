import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {

	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li><input placeholder="What needs to be done" style={{ border: "none", width: "100%" }}></input></li>
				<li>Something</li>
				<li>Something</li>
				<li>Something</li>
				<li>Something</li>
			</ul>
			<div>Items left</div>
		</div>
	);
};

export default Home;
