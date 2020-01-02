import React from "react";
import fetch from "isomorphic-unfetch";
class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yazilar: [],
      currentPage: 1,
      pageCount: props.c
    };
  }
  componentDidMount() {
    console.log(this.props.children);
  }
  render() {
    //her state değiştiğinde render() tekrar tekrar çalışacak
    return <div>{this.props.children}</div>;
  }
}
export default Paginator;
