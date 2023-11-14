import React, { useState } from "react";

function Home() {
	// State Hook
	const [tasks, setTasks] = useState([]);



	const deleteTasks = tasks.filter((erase) => { index });

	return (
		<div className="container">
			<h1 className="text-muted">todos</h1>
			<input type="text" placeholder="What needs to be done?" onKeyDown={(e) => { if (e.code === "Enter") setTasks([e.target.value, ...tasks]) }} />
			<ul>
				{tasks.map((task, index) =>
					<li>
						<p>{task}</p>
						<button onClick={() => deleteTask(index)}> X </button>
					</li>
				)}

			</ul>
		</div>
	);
};


export default Home;
