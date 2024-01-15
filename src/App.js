import React from "react";
import Change from "./components/Change";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    {
      width: "300px",
      height: "150px",
      backgroundColor: "red",
    },
    {
      width: "200px",
      height: "250px",
      backgroundColor: "green",
    },
    {
      width: "100px",
      height: "350px",
      backgroundColor: "yellow",
    },
  ];
  return (
    <div>
      <Change />
      <Boxes Array={stylesArr} />
      <Card>
        <Avatar
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          }
          alt={"Картинка"}
        />
      </Card>
      <Counter />
    </div>
  );
};

export default App;
