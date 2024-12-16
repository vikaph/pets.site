import React from 'react';


function Slide(props) {
    
    return (        
    <div className={props.css_class}>
      <img        
        img src={'https://pets.xn--80ahdri7a.site/'+props.data.image}
        className="m-auto d-block max-height-300"
        alt="img"
      />
      <h2 className="text-center">{props.data.kind}</h2>
      <p className="text-center">
        {props.data.description}
      </p>
    </div>

    );}
export default Slide;