import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import "./base.less";
import logo from "../../images/logo.png";
import "../../utils/utils";
import { a } from "../../utils/tree-shaking";
// import LargeNumber from "large-number-from-htime";

class Search extends React.Component {
  constructor(...args) {
    super(args);

    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import("./text.js").then((Text) => {
      console.log("Text: %s", Text);
      this.setState({
        Text: Text.getText,
      });
    });
  }

  render() {
    const { Text } = this.state;
    a();
    // const addResult = LargeNumber("999", "1");
    return (
      <div className="search-text box-flex">
        搜索文字的内容1
        {LargeNumber("1", "1")}
        {Text ? <Text /> : null}
        <img alt src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));

