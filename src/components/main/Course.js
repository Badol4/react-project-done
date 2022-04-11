import React from "react";
import "./Course.css";

const Course = (props) => {
    const {handleClick} = props.handleClick
  const { name, pic, job,price } = props.data
  return (
    <div>
      <div className="w70 main">
        <div className="imgs">
          <img src={pic} alt="" />
        </div>
        <div className="margain">
          <h4>name: {name}</h4>
          <h4>job: {job}</h4>
          <p>price: {price} taka</p>
          <button onClick={(()=> props.handleClick(props.data))}>lets go</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
