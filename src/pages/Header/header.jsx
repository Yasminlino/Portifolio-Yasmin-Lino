import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/bootstrap-Journal.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Yasmin Lino</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Alternar navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(atual)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Formacao">FORMAÇÃO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="Portifolio">PORTFÓLIO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="contato">CONTATO</Link>
                </li>
            </ul>
            {/* <div className='my-2 my-lg-0'>
                <i class="bi bi-list form-control my-lg-0"></i>
            </div> */}
        </div>
    </nav>
  );
};

export default Header;
