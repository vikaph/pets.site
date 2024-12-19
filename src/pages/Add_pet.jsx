import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useRef}  from 'react';

const Add_pet = () => {
    let blocks = useRef();
    function dobav(e) {
        e.preventDefault();
        let formdata = new FormData(document.getElementById("dobav"));
        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.status)
            .then(result => {
                console.log(result);
                if (result === 200) {
                    let message = 'Вы успешно выложили объявление!!!';
                    blocks.current.innerText = message;
                    blocks.current.style.background = "#a352e3"
                    blocks.current.style.color = "black";
                    blocks.current.style.border = "1px solid rgb(201, 20, 20)"
                    blocks.current.style.display = 'flex';
                }
            })

            .catch(error => console.log('error', error));
    }


    return(
        <div>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
       <div className="container bd-gutter flex-wrap flex-lg-nowrap">
            <h2 className="text-center text-black bg-warning m-2">Добавить объявление</h2>


            <form className="contei w-50 m-auto p-5" id="dobav"  noValidate onSubmit={dobav} >
                <label htmlFor="inputA">Ваше имя</label>
                <input type="text" className="form-control" id="inputA" required name="name" />
                <br />
                <label htmlFor="inputK">Введите номер телефона</label>
                <input type="text" className="form-control" pattern='^[\d\+]{12}$' id="inputK" required name="phone" />
                <br />
                <label htmlFor="inputEmail1">Введите вашу почту</label>
                <input type="email" className="form-control" id="inputEmail1" required name="email" />
                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Выберите файл </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" required name="photos1" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Выберите файл </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile2" name="photos2" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Выберите файл </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile3" name="photos3" />
                </div>
                <br />
                <label htmlFor="inputLast">Чип</label>
                <input type="text" className="form-control" id="inputKlich" name="mark" />
                <br />

                <label htmlFor="inputLast">Вид животного</label>
                <input type="text" className="form-control" id="inputVid" required name="kind" />
                <br />
                <label htmlFor="inputLast">Район</label>
                <input type="text" className="form-control" id="inputLast" required name="district" />
                <br />
                <label htmlFor="inputData">Дата нахождения животного</label>
                <input type="date" className="form-control" id="inputData" required name="date" />
                <br />
                <label htmlFor="exampleFormControlTextarea1">Описание</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
                <br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required name="confirm" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Подтвердите что вы не робот
                    </label>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn color text-white">Выложить объявление</button>
                </div>
            </form>
            <div className="alert w-50 asda mt-3 m-auto" style={{ "display": "none" }} role="alert" ref={blocks}></div>
            <pre></pre>
            </div>
            </main>
            <Footer/>
        </div>
    );
};
export default Add_pet;