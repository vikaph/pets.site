import React from 'react';
import {useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Registration = () => {

        let [user, setUser] = useState();
        let blocks = useRef();
    
        function sign(e) {
            e.preventDefault();
    
            const form = document.getElementById('forma')
    
            if (!form.checkValidity()) {
                e.stopPropagation()
                form.classList.add('was-validated')
                return
            }
    
            var myHeaders = new Headers();
    
    
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body : new FormData(form),
                redirect: 'follow'
            };
    
    
            fetch("https://pets.сделай.site/api/register", requestOptions)
                .then(response => response.status)
                .then(result => {
                    console.log(result)
                    if (result === 204) {
                        let message = 'Вы успешно зарегистрировались!';
                        blocks.current.innerText = message;
                        blocks.current.style.background = "#34C924"
                        blocks.current.style.color = "black";
                        blocks.current.style.border = "1px solid rgb(19, 136, 8)"
                        blocks.current.style.display = 'flex';
                    }
                    else
                    {
                        debugger;
                        let message = 'Неправильно введен логин или пароль!';
                        blocks.current.innerText = message;
                        blocks.current.style.background = '#C76864';
                        blocks.current.style.color = "black";
                        blocks.current.style.border = "1px solid #801818"
                        blocks.current.style.display = 'flex';
                    }})
                .catch(error => function(){debugger;console.log('error', error)});
        }
    
        return (<div>
          <Header/>
          <main style={{ minHeight: "70vh" }}>
  <div className="container bd-gutter flex-wrap flex-lg-nowrap">
          <h2 className="text-center text-black bg-warning m-2">Аутентификация</h2>
            <div style={{ "minHeight": "70vh" }}>
                <form className="w-50 m-auto p-5 needs-validation" style={{ "min-width": "300px" }} noValidate onSubmit={sign} id='forma'>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-check-label">Имя (кириллица, пробел, дефис)</label>
                        <input name="name"  type="name" pattern='^[А-ЯЁа-яё\s\-]{2,30}$' className="form-control" id="validationTextarea" aria-describedby="emailHelp"  required onChange={(e) => setUser({ ...user, name: e.target.value })}/>
                        <div className="invalid-feedback">
                            Пожалуйста, введите сообщение в текстовое поле.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Номер телефона (цифры, и знак +)</label>
                        <input name="phone" type="tel" pattern='^\+7\d{10}$' className="form-control" id="validationTextarea" aria-describedby="emailHelp" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Почта</label>
                        <input name='email' type="email"  className="form-control" id="validationTextarea" aria-describedby="emailHelp" required  onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль (не менее 7 символов, обязательно: 1 цифра, 1 строчная, 1 заглавная буква)</label>
                        <input name="password" type="password" pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$' className="form-control" id="validationTextarea"  required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Повторите пароль</label>
                        <input name="password_confirmation" type="password" className="form-control" pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$' id="validationTextarea"  required onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })} />
                    </div>
                    <div className="mb-3 form-check">
                        <input name="confirm" type="checkbox" className="form-check-input" id="validationTextarea" required onChange={(e) => setUser({ ...user, confirm: e.target.value })}/>
                        <label className="form-check-label" htmlFor="validationFormCheck1">Согласие на обработку персональных данных</label>
                        <div className="invalid-feedback">Обязательное поле</div>
                    </div>
                    <button type="submit" className="btn color text-white">Зарегистрироваться</button>
                </form>
                <div className="alert alert-danger w-50 asda m-auto" style={{ "display": "none" }} role="alert" ref={blocks}></div>
            </div>
            <br/>
            </div>
            </main>
         
            <Footer/>
            </div>
        );
    };
  
export default Registration;