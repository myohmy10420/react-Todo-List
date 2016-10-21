import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [],
      text: ''
    };

    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentWillUnmount () {
  }

  componentDidMount () {
  }

  _handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  _handleClick(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
  


  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <input onChange={this._handleChange} value={this.state.text} />
        <button onClick={this._handleClick}>{'Add #' + (this.state.items.length + 1)}</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
}
