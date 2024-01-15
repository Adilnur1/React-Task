import React from "react";

const Avatar = (props) => {
  console.log(props.src);
  return (
    <div style={{ border: "2px solid grey" }}>
      <img style={{ width: "100%" }} src={props.src} alt="Картинка" />
    </div>
  );
};

export default Avatar;
