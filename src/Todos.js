import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "take out the trash", done: false, notes: ["boring"] },
        { title: "walk dog", done: true, notes: ["exercise"] },
        { title: "read about React", done: false, notes: ["fun!"] },
      ],
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { todos: [...oldState.todos] };
      });
    }, 1000);
  }
  render() {
    console.log("Todos render called");
    return (
      <div>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              title={todo.title}
              done={todo.done}
              notes={todo.notes}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos;
