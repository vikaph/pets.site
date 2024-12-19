import React from 'react';
import logo from "../image/logo.png";
import {Link} from "react-router-dom";
import Search2 from "./Search2";


const Header = () => { 
    return (
        <div>
          <style
  dangerouslySetInnerHTML={{
    __html:
      ".color{background-color: blueviolet;}"
  }}
/>
            <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-">
    <div className="container-fluid">
     
    <Link to={'/'}><img src={logo} alt="WhiteTickets" className="test-0-logo" class="w-25 rounded-3"/></Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to={'/'}>Главная</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Личный кабинет</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/registration'}>Регистрация</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/add_pet'}>Добавить объявление</Link>

          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/search'}>Поиск по объявлениям</Link>
          </li>
        </ul>

        <Search2/>
        {/* <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            list="pets"
            placeholder="Поиск"
            aria-label="Search"
          />
          <button className="btn color text-white" onclick="">
            Поиск
          </button>
          <datalist id="pets">
            <option value="Кошка"></option>
            <option value="Собака"></option>
            <option value="Корова"></option>
            <option value="Крокодил"></option>
            <option value="Сова"></option>
          </datalist>
        </form> */}
      </div>
    </div>
  </nav>
</header>
        </div>
    );
};

export default Header;