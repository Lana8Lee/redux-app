import React from "react";

const Main = ({ title, name }) => {
  return (
    <div className="hello-world">
      <span className="hello-world__tech">{title}</span>
      <span> {name}!</span>
    </div>
  );
};

export default Main;
