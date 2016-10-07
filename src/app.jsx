import React from "react";
import { render } from "react-dom";
import { Title } from "./Component/Title"

render(
  <Title text="Hello props!" />,
  document.getElementById('content')
);
