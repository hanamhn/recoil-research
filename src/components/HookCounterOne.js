import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default HookCounterOne;
