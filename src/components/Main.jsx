import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Cards from './Cards';
import NewsComponent from './NewsComponent';
import React, {useEffect, useState} from 'react';


function Main(props) {
  let [cards, setCards]=useState([]);
  
  useEffect(()=>load(), []);
  function load(){
      fetch('https://pets.xn--80ahdri7a.site/public/api/pets')
          .then(response=>response.json())
          .then(result=>{
              console.log(result);
              
setCards(result.data.orders.map((card)=><Cards data={card}/>));
          })
  }

    return (
        <div>
             <style
  dangerouslySetInnerHTML={{
    __html:
      ".color{background-color: blueviolet;}"
  }}
/>
            <Header/>
            <main style={{ minHeight: "70vh" }}>
  <div className="container bd-gutter flex-wrap flex-lg-nowrap">
    <h2 className="text-center text-black bg-warning m-2">
      Найденные животные
    </h2>
    <br />
            <Slider/>
            <br/>
            <h2 className="text-center text-black bg-warning m-2">
    Карточки найденных животных
  </h2>
  <div
    className="d-flex flex-row flex-wrap"
    style={{ paddingLeft: "11%", paddingRight: "11%" }} >
  {cards}</div>
  <br />

            <br />
            <NewsComponent/>
            </div></main>
            <Footer/>
        </div>
    );
};

export default Main;