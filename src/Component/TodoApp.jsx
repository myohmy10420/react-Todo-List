import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: ''
    }

    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentWillUnmount () {
  }

  componentDidMount () {
  }

  _handleChange(e) {
    console.log('onchanged:' + e.target.value)
    this.setState({
      text: e.target.value
    })
  }

  _handleClick() {
    console.log('here')
  }


  render() {
    return (
      <div>
        <TodoList />
        <input onChange={this._handleChange} value={this.state.text} />
        <button onClick={this._handleClick}>Add</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
}
