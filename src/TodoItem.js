import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    console.log("TodoItem render called");
    return (
      <div>
        {this.props.done ? "✓" : "▢"} {this.props.title}(
        {this.props.notes.join(", ")})
      </div>
    );
  }
}
