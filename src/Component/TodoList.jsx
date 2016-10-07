import React, { Component } from 'react';

export class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillUnmount () {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <p>{this.props.item}</p>
      </div>
    )
  }
}

TodoList.defaultProps = {
}
