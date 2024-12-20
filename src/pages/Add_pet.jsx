import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
 
const Add_pet = () => {
  const [isChecked, setIsChecked] = useState(false);
 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
 
  // Функция отправки формы
  const send_form = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
 
    // Получаем форму через ID
    const form = document.getElementById('form');
    const formData = new FormData(form);
 
    // URL для запроса
    const url = 'https://pets.xn--80ahdri7a.site/api/pets';
 
    // Параметры для fetch
    let requestOptions = {
      method: 'POST',
      body: formData, // Отправляем FormData напрямую
    };
 
    try {
      const response = await fetch(url, requestOptions);
 
      if (!response.ok) {
        throw new Error('Ошибка на сервере');
      }
 
      const result = await response.json();
 
      if (result && result.data) {
        // Если есть токен, сохраняем в localStorage и показываем успешное сообщение
        localStorage.setItem('token', result.data.token);
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
      } else {
        // Если данные не верны, показываем сообщение об ошибке
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
        document.getElementById('validationCustom02').value = ''; // Очистить поле при ошибке
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      document.getElementById('error').style.display = 'block';
      document.getElementById('success').style.display = 'none';
    }
  };
 
  return (
    <div>
      <Header/>
      <main style={{ minHeight: "70vh" }}>
       <div className="container bd-gutter flex-wrap flex-lg-nowrap">
            <h2 className="text-center text-black bg-warning m-2">Добавить объявление</h2>
      <div className="p-3">
        {/* Элементы для сообщений об успехе и ошибке */}
        <div id="success" style={{ display: 'none' }} className="alert alert-success">
          Успешно отправлено!
        </div>
        <div id="error" style={{ display: 'none' }} className="alert alert-danger">
          Произошла ошибка при отправке формы.
        </div>
 
        <form
          className="w-50 m-auto border border-warning p-3"
          style={{ minWidth: 300 }}
          id="form"
          onSubmit={send_form}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Введите ваше имя</label>
            <input type="text" className="form-control" id="name" name="name" />
            <div className="form-text">Используйте кириллические буквы.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
            <input type="phone" className="form-control" id="phone" name="phone" />
            <div className="form-text">Используйте цифры, +, -.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
            <input type="email" className="form-control" id="email" name="email" />
            <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="kind" className="form-label">Введите вид животного:</label>
            <input type="text" className="form-control" id="kind" name="kind" required />
            <div className="form-text">Обязательное поле</div>
          </div>
          <div className="mb-3">
            <label htmlFor="district" className="form-label">Введите район:</label>
            <input type="text" className="form-control" id="district" name="district" required />
            <div className="form-text">Обязательное поле</div>
          </div>
          <div className="mb-3 form-check border p-3">
            <input
              type="checkbox"
              className="form-check-input m-3"
              id="confirm"
              name="confirm"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label m-3 " htmlFor="exampleCheck1">
              Пройти автоматическую регистрацию
            </label>
 
            {isChecked && (
              <>
                <br />
                <label htmlFor="password" className="form-label">Введите пароль:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
                <div className="form-text">
                  Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная буква, 1 - заглавная буква
                </div>
 
                <label htmlFor="confirm_password" className="form-label">Повторите пароль:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  name="confirm_password"
                  required
                />
              </>
            )}
          </div>
 
          <div className="mb-3 p-3 border">
            <label htmlFor="photos1" className="form-label">Выберите файлы изображений:</label>
            <input type="file" className="form-control" id="photos1" name="photos1" required />
            <div className="form-text">Обязательное поле</div>
            <input type="file" className="form-control mb-3" id="photos2" name="photos2" />
            <input type="file" className="form-control mb-3" id="photos3" name="photos3" />
          </div>
          <div className="mb-3">
            <label htmlFor="mark" className="form-label">Электронный чип:</label>
            <input type="text" className="form-control" id="mark" name="mark" required />
            <div className="form-text">Обязательное поле.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Описание:</label>
            <textarea className="form-control" id="description" name="description" defaultValue={""} />
            <div className="form-text">Обязательное поле.</div>
          </div>
          <div className="mb-3 form-check p-3">
            <input type="checkbox" className="form-check-input" id="confirm" name="confirm" />
            <label className="form-check-label" htmlFor="confirm">
              Подтвердить согласие на обработку персональных данных
            </label>
          </div>
          <button
            type="submit"
            className="btn  color text-white"
            name="submit"
            style={{ marginRight: 10 }}
          >Зарегистрировать</button>
        </form>
      </div>
      </div>
      </main>
      <Footer/>
    </div>
  );
};
 
export default Add_pet;