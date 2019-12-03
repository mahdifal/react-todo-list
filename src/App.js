import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";
import "./app.css";

class App extends Component {
  state = {
    items: [],
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
      title: this.state.item,
      isDone: false
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
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterdItems
    });
  };

  handleEdit = id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterdItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  handleIsDone = id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    selectedItem.isDone = !selectedItem.isDone;
    this.setState({
      ...this.state,
      id: id,
      items: [...filterdItems, selectedItem]
    });
  };

  componentDidMount() {
    localStorage.getItem("todo_items") &&
      this.setState({
        items: JSON.parse(localStorage.getItem("todo_items"))
      });
  }

  UNSAFE_componentWillUpdate(props, state) {
    localStorage.setItem("todo_items", JSON.stringify(state.items));
  }

  render() {
    return (
      <>
        <div className="my-background d-flex align-items-center min-vh-100">
          <div className="container card">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-5">
                <h3 className="text-center text-capitalize">simple todo app</h3>
                <div className="text-center">
                  <a
                    href="https://github.com/mahdifal"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github fa-3x"></i>
                  </a>
                </div>
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
                  handleIsDone={this.handleIsDone}
                  isDone={this.state.isDone}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
