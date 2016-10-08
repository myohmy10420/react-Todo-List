import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      savetext: '',
      text:''
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
        savetext: e.target.value
      })
    }

  _handleClick() {
    console.log('here')
    this.setState({
      text: this.state.savetext
    })
  }


  render() {
    return (
      <div>
        <TodoList item={this.state.text} />
        <input onChange={this._handleChange} value={this.state.savetext} />
        <button onClick={this._handleClick}>Add</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
}
