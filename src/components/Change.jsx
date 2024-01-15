import React, { useState } from "react";

const Change = () => {
  const [task, setTask] = useState("");
  const changeInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={changeInput} />
      <p>{task}</p>
    </div>
  );
};

export default Change;
