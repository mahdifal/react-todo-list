import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit, handleIsDone, isDone } = this.props;
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 1000 }}
            >
                {props => (
                    <div style={props}>
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
                    </div>
                )}
            </Spring>
        )
    }
}
