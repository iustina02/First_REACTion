import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <>
        <img src={this.props.src} alt="bear_img"></img>

        <a id="button_next" href={this.props.nextPage}>
          {" "}
          Next{" "}
        </a>

        <h3 class="text" id="details">
          {this.props.content}
          <p style={{ color: "red", fontstyle: "italic" }}>
            {" "}
            {this.props.moreInfo}
          </p>
        </h3>
      </>
    );
  }
}
