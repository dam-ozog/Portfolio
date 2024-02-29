const Project = () => {
  const project1 = (
    <a href="https://dam-ozog.github.io/Todo-react/" target="_blank" rel="noreferrer">
      <span>TO DO</span>
    </a>
  );
  return (
    <div className="section-projects">
      <h1>Projects</h1>
      <div className="projects-container" id="projects">
        <div className="project-box">
          <iframe
            src="https://dam-ozog.github.io/Todo-react/"
            frameborder="0"
            height={'300px'}
            alt
            title="project-1"
          ></iframe>
          <p>{project1}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
