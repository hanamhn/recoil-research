import React, { memo, useEffect } from "react";

const ChildComponent = (props) => {
  console.log("render child component");
  useEffect(() => {
    props.fetchData("users");
  }, [props.fetchData]);
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.title}</p>
    </div>
  );
};

export default memo(ChildComponent);
