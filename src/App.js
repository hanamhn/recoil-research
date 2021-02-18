import React, { useState, useEffect, useCallback } from "react";
import ChildComponent from "./components/ChildComponent";

const fetchData = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData("todos");
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent title="This is the title" fetchData={fetchData} />
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import Child from "./Child";

// export default class App extends Component {
//   state = {
//     time: new Date(),
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         time: new Date(),
//       });
//     }, 1000);
//   }

//   render() {
//     return (
//       <div>
//         <Child seconds={1} />
//         {this.state.time.toString()}
//       </div>
//     );
//   }
// }
