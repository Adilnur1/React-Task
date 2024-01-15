import React from "react";

const Boxes = (props) => {
  return (
    <div>
      {props.Array.map((item, index) => (
        <div
          key={index}
          style={{
            width: item.width,
            height: item.height,
            backgroundColor: item.backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;
