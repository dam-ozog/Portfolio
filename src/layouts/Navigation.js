const Navigation = () => {
  
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
