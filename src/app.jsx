var Title = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>Author</h2>
      </div>
    )
  }
});

ReactDOM.render(
  <Title text="Hello props!" />,
  document.getElementById('content')
);
