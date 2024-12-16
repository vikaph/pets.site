import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';

const Profile = () => {
    
  let [user, setUser]=useState({name: "", id: "", registrationDate: "", phone: ""});  
  
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+localStorage.token);
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
      method: 'GET',
      headers: myHeaders //+body если существует
  };
  fetch("http://pets.сделай.site/api/users", requestOptions)
      .then(response=>response.json())
      .then(response=>setUser(response))

    return (
        <div>
            <Header/>
  <main style={{ minHeight: "70vh" }}>
    <div className="container bd-gutter flex-wrap flex-lg-nowrap">
      <h2 className="text-center text-black bg-warning m-2">Личный кабинет</h2>
      <div className="p-3">
        <div
          className="d-flex flex-row flex-wrap border m-auto p-3 w-50"
          style={{ minWidth: 300 }}
        >
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            id:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.id}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Имя:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.name}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Телефон:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.phone}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            email:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
            {user.email}
          </p>
         
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Дата регистрации:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.registrationDate}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Количество найденных животных:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.countOrder}
          </p>
          <p
            className="w-50 text-secondary fw-bolder"
            style={{ minWidth: 300 }}
          >
            Количество объявлений:
          </p>
          <p className="w-50" style={{ minWidth: 300 }}>
          {user.countPets}
          </p>
        </div>
      </div>
      <h2 className="text-center text-black bg-warning m-2">
        Изменить адрес электронной почты
      </h2>
      <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите адрес электронной почты
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div className="form-text">
            Мы никогда не делимся вашими контактами.
          </div>
        </div>
        <button type="submit" className="btn color text-white">
          Отправить
        </button>
      </form>
      <h2 className="text-center text-black bg-warning m-2">
        Изменить номер телефона
      </h2>
      <form className="w-50 m-auto p-3" style={{ minWidth: 300 }}>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Введите номер телефона
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
          <div className="form-text">Используйте цифры, +, -.</div>
        </div>
        <button type="submit" className="btn color text-white">
          Отправить
        </button>
      </form>
      <h2 className="text-center text-black bg-warning m-2">
        Добавленные объявления
      </h2>
      <br />

      <nav aria-label="Page navigation example" className="m-3">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  <br />
  <br />
            <Footer/>
        </div>
    );
};

export default Profile;