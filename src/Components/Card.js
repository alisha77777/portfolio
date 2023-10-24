import React from "react";

const Card = ({ data }) => {
  return (
    <div id="Card">
      <div className="cardImage">
        <img src={data.src} alt="" width={"100%"} height={"100%"}/>
      </div>
      <div>
        <h4>{data?.name}</h4>
      </div>
      <div className="card_text">
        <p>
          {data?.desc}
        </p>
      </div>
      <div className="ImgContainer">
        {data.images?.map(({ src }) => {
          return (
            <div className="ImgBox" key={src}>
              <img src={src} alt="" width="100%" height="100%" />
            </div>
          );
        })}
      </div>
      <div className="Card_button">
        <a href={data?.href} target="_blank"><button> see live</button></a>
        <a href={data?.git} target="_blank"><button> Source code</button></a>
      </div>
    </div>
  );
};

export default Card;
