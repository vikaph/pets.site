import React from 'react';

 
const Cards = (props) => {
    return (
      <div
      className="d-flex flex-row flex-wrap border m-3 p-3"
      style={{ minWidth: 300, width: "30%" }}
    >
      <img
        src={'https://pets.сделай.site'+props.data.photos}
        className={'card-img-top www'}
        alt="рисунок животного"
        style={{
          "height":"300px"
        }}
      />
      
      <p
        className="w-50 text-primary"
        style={{ minWidth: 30, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.kind}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Описание:
      </p>
      <p className="w-50" style={{ minWidth: 250, marginBottom: 10 }}>
        {props.data.description}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Номер чипа:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.mark}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Район:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.district}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        Дата:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.date}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
       Телефон
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.phone}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
       Имя
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {props.data.name}
      </p>
    </div>
           );
};

export default Cards;