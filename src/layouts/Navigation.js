import React from 'react';

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

  const aboutMe = <a href="#aboutme">About Me</a>;

  const projects = <a href="#projects">Projects</a>;

  return (
    <div className="navigation">
      <div className="nav">
        <nav className="nav-ul">
          <ul>
            <li>{aboutMe}</li>
            <li>{projects}</li>
          </ul>
        </nav>
      </div>
      <div className="nav">
        <nav className="nav-ul">
          <ul className="ul-2">
            <li>{email}</li>
            <li>{github}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
