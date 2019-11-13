import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit, handleIsDone, isDone } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <span>
                    <input type="checkbox" onChange={handleIsDone} defaultChecked={isDone} />
                    <h6 className="ml-1 d-inline">
                        {isDone ? <del><i>{title}</i></del> : `${title}`}
                    </h6>
                </span>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen mouse" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash mouse" />
                    </span>
                </div>
            </li>
        )
    }
}
