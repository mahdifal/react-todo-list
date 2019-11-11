import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "make breakfast"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  // methods
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    console.log("clear list");
  };

  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };

  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-center text-capitalize">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
