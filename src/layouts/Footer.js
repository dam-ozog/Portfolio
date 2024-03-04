const Footer = () => {
  const email = (
    <a href="mailto:dam.ozog@gmail.com" target="_blank" alt="email" rel="noreferrer">
      <i className="fa-solid fa-envelope"></i>
      <span>Email</span>
    </a>
  );

  const github = (
    <a href="https://github.com/dam-ozog" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-square-github"></i>
      <span>Github</span>
    </a>
  );

  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="contact">{email}</div>
        <div className="contact">{github}</div>
      </div>
    </section>
  );
};

export default Footer;
