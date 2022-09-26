import React, { Component } from "react";

export default class ClassBase extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "text-danger" };
  }
  static getDerivedStateFromProps(props, state) {
  if (props.color) {
    return {color: props.color };
  }else{
    return {color: 'text-danger' };
  }
}
  render() {
    return (
      <>
        <div className={this.state.color}>
          This is my first class based component wit constructor and its methode
        </div>
        <button className="btn btn-sm mt-3" onClick={this.props.changecol}>change</button>
      </>
    );
  }
}
