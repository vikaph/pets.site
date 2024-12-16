import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Add_pet = () => {    
    return (
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
  <div className="container bd-gutter flex-wrap flex-lg-nowrap">
    <h2 className="text-center text-black bg-warning m-2">
      Добавление нового объявления
    </h2>
    <div className="p-3">
      <form
        className="w-50 m-auto border border-warning p-3"
        style={{ minWidth: 300 }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Введите ваше имя
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            pattern="[А-Яа-яЁё ]+"
            required=""
          />
          <div className="form-text">Используйте кириллические буквы.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Введите свой телефон
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            pattern="\d{11}"
            required=""
          />
          <div className="form-text">Используйте только цифры</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Введите адрес электронной почты
          </label>
          <input type="email" className="form-control" id="email" required="" />
          <div className="form-text">
            Мы никогда не делимся вашими контактами
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="kind" className="form-label">
            Введите вид животного
          </label>
          <input type="text" className="form-control" id="kind" required="" />
          <div className="form-text">Обязательное поле</div>
        </div>

        <div className="mb-3 form-check border p-3">
  <input type="checkbox" className="form-check-input m-3" id="exampleCheck1" />
  <label className="form-check-label m-3" htmlFor="exampleCheck1">
    Пройти автоматическую регистрацию
  </label>
  <br/>
  <label htmlFor="password" className="form-label hidden">
    Введите пароль:
  </label>
  <input
    type="password"
    className="form-control hidden"
    id="password"
    minLength={7}
    required=""
  />
  <div className="form-text hidden">
    Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 -
    заглавная буква
  </div>
  <label htmlFor="confirm_password" className="form-label hidden">
    Повторите пароль:
  </label>
  <input
    type="password"
    className="form-control hidden"
    id="confirm_password"
    minLength={7}
    required=""
  />
</div>


        <div className="mb-3 p-3 border">
          <label htmlFor="image1" className="form-label">
            Выберите файлы изображений
          </label>
       <input type="file" className='form-control-file' id='file1' required name='photos1'/>
          <div className="form-text">Обязательное поле</div>
        </div>
        <div className="mb-3">
          <label htmlFor="chip" className="form-label">
            Электронный чип
          </label>
          <input type="text" className="form-control" id="chip" required="" />
          <div className="form-text">Обязательное поле</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание:
          </label>
          <textarea
            className="form-control"
            id="description"
            required=""
            defaultValue={""}
          />
          <div className="form-text">Обязательное поле</div>
        </div>
        <div className="mb-3 form-check p-3">
          <input type="checkbox" className="form-check-input" id="check1" />
          <label className="form-check-label" htmlFor="check1">
            Подтвердить согласие на обработку персональных данных
          </label>
        </div>
        <input
          type="submit"
          className="btn color text-white form-control"
          defaultValue="Зарегистрировать"
        />
      </form>
    </div>
  </div>
</main>
            <Footer/>
        </div>
    );
};

export default Add_pet;