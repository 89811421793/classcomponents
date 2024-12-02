import React from "react";
import { Icon } from "./Icon";

export class Logo extends React.Component {
  render() {
    return (
      <a href="/">
        <Icon iconId={"foxlogo"}/>
      </a>
    );
  }
}
