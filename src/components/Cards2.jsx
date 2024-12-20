import React, { useEffect, useState } from 'react';
 
function ProfileCard(props) {
debugger;

const deleteCard = event => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
  
  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://pets.сделай.site/api/users/orders/" + event.target.dataset.id, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result); 
      document.location.reload();
  })
    .catch(error => console.log('error', error));
      }
    

    return (
        <div>
           <>
  <div className="d-flex flex-row flex-wrap">
    <div
      className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
      style={{ minWidth: 300, width: "30%", marginLeft: 100 }}
    >
      <img
        src={'https://pets.сделай.site'+props.data.photos}
        className={'card-img-top www'}
        alt="рисунок животного"
        style={{
            "height":"210px"
          }}
      />
      <p
        className="w-50 text-primary"
        style={{ minWidth: 300, marginBottom: 10 }}
      >
        id:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
      {props.data.id}
      </p>
      <p
        className="w-50 text-primary"
        style={{ minWidth: 30, marginBottom: 10 }}
      >
        Вид животного:
      </p>
      <p className="w-50" style={{ minWidth: 300, marginBottom: 10 }}>
        {" "}
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
      

      <div onClick={deleteCard} data-id={props.data.id}
       style={{ top: 15, right: 15, cursor: "pointer" }} 
      >
        ❌
      </div>
      {/* <button type="submit" className="btn btn-success">
        Редактировать объявление
      </button> */}
    </div>
    
  </div>
 
</>
 
        </div>
    );
};
export default ProfileCard;