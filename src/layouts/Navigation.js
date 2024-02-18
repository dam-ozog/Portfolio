import React from 'react';

const Navigation = () => {
  const email = (
    <a href="mailto:dam.ozog@gmail.com" target="_blank" alt="email">
      <i className="fa-solid fa-envelope"></i>
    </a>
  );

  const github = (
    <a href="https://github.com/dam-ozog" target="_blank">
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
            <li>Three</li>
          </ul>
        </nav>
      </div>
      <div className="kontakt">
        <ul className="kontakt-ul">
          <li>{email}</li>
          <li>{github}</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
