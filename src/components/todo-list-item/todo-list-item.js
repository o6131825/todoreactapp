import React from 'react';

import './todo-list-item.css';

class TodoListItem extends React.Component {

  onLabelClick = () => {
    if (!this.state.done) {
    this.setState({
      done: true
    })
  } else {
    this.setState({
      done: false
    })
    }

  }

  onMarkImportant = () => {
    if (!this.state.important) {
    this.setState({
      important: true
    })
  } else {
    this.setState({
      important: false
    })
    }

  }

  state = {
    done: false,
    important: false
  };


  render() {

    const { label } = this.props;
    const { done, important } = this.state;

    let className = 'todo-list-item';
    if (done) {
      className += ' done';
    }
    

    if (important){
      className+= ' important';
    }
    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
       
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
};


export default TodoListItem;
