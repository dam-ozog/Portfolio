const Navigation = () => {
  const email = (
    <a href="mailto:dam.ozog@gmail.com" target="_blank" alt="email" rel="noreferrer">
      <i className="fa-solid fa-envelope"></i>
    </a>
  );

  const github = (
    <a href="https://github.com/dam-ozog" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-square-github"></i>
    </a>
  );

  const aboutMe = <a href="#aboutme">About</a>;

  const projects = <a href="#projects">Projects</a>;

  return (
    <div className="navigation">
      <nav className="nav-ul">
        <ul>
          <li>{aboutMe}</li>
          <li>{projects}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
