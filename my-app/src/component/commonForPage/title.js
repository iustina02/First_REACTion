import React from "react";

//light theme
var theme = 0;

export class Title extends React.Component {
  componentDidMount() {
    var body = document.getElementById("theme_change_body");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("intro");
    var counter = document.getElementById("like_counter");
    var details = document.getElementById("details");
    var button_next = document.getElementById("button_next");
    var theme_button = document.getElementById("theme_button");

    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
      //white settings
      // eslint-disable-next-line
      if (theme == 0) {
        body.style.background = "white";
        title.style.background = "black";
        subtitle.style.color = "black";
        counter.style.color = "black";
        details.style.color = "black";
        button_next.style.color = "white";
        button_next.style.background = "black";
        theme_button.style.background = "#5a1f28";
        theme_button.innerHTML = "🌇";
      } else {
        // black settings
        body.style.background = "black";
        title.style.background = "white";
        subtitle.style.color = "white";
        counter.style.color = "white";
        details.style.color = "white";
        button_next.style.color = "black";
        button_next.style.background = "white";
        theme_button.style.background = "#f3feff";
        theme_button.innerHTML = "🏙️";
      }
    } else {
      localStorage.setItem("theme", 0);
      theme = 0;
    }
  }

  handleClick() {
    var body = document.getElementById("theme_change_body");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("intro");
    var counter = document.getElementById("like_counter");
    var details = document.getElementById("details");
    var button_next = document.getElementById("button_next");
    var theme_button = document.getElementById("theme_button");

    // If theme is dark change to light ... else
    //white settings
    // eslint-disable-next-line
    if (theme == 1) {
      body.style.background = "white";
      title.style.background = "black";
      subtitle.style.color = "black";
      counter.style.color = "black";
      details.style.color = "black";
      button_next.style.color = "white";
      button_next.style.background = "black";
      theme_button.style.background = "#5a1f28";
      theme_button.innerHTML = "🌇";

      theme = 0;
      localStorage.setItem("theme", 0);
    } else {
      //black settings
      body.style.background = "black";
      title.style.background = "white";
      subtitle.style.color = "white";
      counter.style.color = "white";
      details.style.color = "white";
      button_next.style.color = "black";
      button_next.style.background = "white";
      theme_button.style.background = "#f3feff";
      theme_button.innerHTML = "🏙️";

      theme = 1;
      localStorage.setItem("theme", 1);
    }
  }
  render() {
    return (
      <div id="title_div">
        <h1 id="title">
          {this.props.name} LIFE {this.props.emoji}
        </h1>

        <button id="theme_button" onClick={this.handleClick}>
          {/* // eslint-disable-next-line */}
          🏙️
        </button>

        <h3 class="text" id="intro">
          - o comoara nepretuita -
        </h3>
      </div>
    );
  }
}
