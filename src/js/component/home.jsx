import React, { useState } from "react";

function Home() {
	// State Hook
	const [tasks, setTasks] = useState([]);

	const deleteTask = (indexToDelete) => {
		setTasks((prevTasks) => prevTasks.filter((task, index) => index !== indexToDelete));
	};

	return (
		<div className="container">
			<h1 className="text-muted">todos</h1>
			<input type="text" placeholder="What needs to be done?" onKeyDown={(e) => { if (e.code === "Enter") setTasks([e.target.value, ...tasks]) }} />
			<ul>
				{tasks.map((task, index) =>
					<li key={index}>
						<p>{task}</p>
						<button onClick={() => deleteTask(index)}> X </button>
					</li>
				)}
				<li className="list-group-item fontSizeSmall">{tasks.length === 1 ? "1 item" : `${tasks.length} items`}</li>
			</ul>
		</div>
	);
};


export default Home;
