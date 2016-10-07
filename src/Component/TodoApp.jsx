import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);

    this._handleClick = this._handleClick.bind(this);
  }

  componentWillUnmount () {
  }

  componentDidMount () {
  }

  _handleClick() {
    console.log('here')
  }


  render() {
    return (
      <div>
        <TodoList />
        <input value='' />
        <button onClick={this._handleClick}>Add</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
}
