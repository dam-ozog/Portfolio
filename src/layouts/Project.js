import React from "react";

const Project = () => {
	const project1 = <a href='https://dam-ozog.github.io/Todo-react/' target='_blank'>TO DO APP</a>
	return (
		<div className='section-projects'>
			<h1>Projects</h1>
			<div className='projects' id='projects'>
				<div>
					<iframe
						src='https://dam-ozog.github.io/todoapp-react/'
						frameborder='0'
						width={"450px"}
						height={"300px"}></iframe>
						{project1}
				</div>
			</div>
		</div>
	);
};

export default Project;
