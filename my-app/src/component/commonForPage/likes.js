import React from "react";

var list_titles = ["WILD", "FREE", "BEAR's", "GREEN", "OUR"];
var list_emoji = ["🎥", "🏕️", "🐻", "🏡", "🌏"];
var likes_on_page;
var width;

export class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem(window.location.pathname.replace("/", ""))) {
      likes_on_page = parseInt(
        localStorage.getItem(window.location.pathname.replace("/", ""))
      );

      var bar = document.getElementById("myBar");
      document.getElementById("like_counter").innerHTML = likes_on_page;
      if (likes_on_page <= 10) {
        width = likes_on_page * 10 + "%";
        bar.style.width = width;
        console.log(likes_on_page, width);
      } else if (likes_on_page > 10 && likes_on_page <= 100) {
        width = likes_on_page + "%";
        bar.style.width = width;
      } else if (likes_on_page > 100 && likes_on_page <= 1000) {
        width = likes_on_page / 10 + "%";
        bar.style.width = width;
      }
    } else {
      likes_on_page = 0;
    }
  }

  componentDidUpdate(prevProps) {
    var bar = document.getElementById("myBar");
    if (likes_on_page <= 10) {
      width = likes_on_page * 10 + "%";
      bar.style.width = width;
      console.log(likes_on_page, width);
    } else if (likes_on_page > 10 && likes_on_page <= 100) {
      width = likes_on_page + "%";
      bar.style.width = width;
    } else if (likes_on_page > 100 && likes_on_page <= 1000) {
      width = likes_on_page / 10 + "%";
      bar.style.width = width;
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //
  //
  //window.location.pathname.replace('/','')
  //
  //

  handleClick() {
    likes_on_page += 1;
    localStorage.setItem(
      window.location.pathname.replace("/", ""),
      likes_on_page
    );
    var bar = document.getElementById("myBar");
    var title = document.getElementById("title");
    document.getElementById("like_counter").innerHTML = likes_on_page;

    if (likes_on_page <= 10) {
      width = likes_on_page * 10 + "%";
      bar.style.width = width;
      console.log(likes_on_page, width);
    } else if (likes_on_page > 10 && likes_on_page <= 100) {
      width = likes_on_page + "%";
      bar.style.width = width;
    } else if (likes_on_page > 100 && likes_on_page <= 1000) {
      width = likes_on_page / 10 + "%";
      bar.style.width = width;
    }
    // eslint-disable-next-line
    if (likes_on_page == 10) {
      new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
        alert("Ai fost cel de al " + likes_on_page + "-lea fan al paginii.");

        width = likes_on_page + "%";
      });
    } /* eslint-disable-next-line */ else if (
      likes_on_page % 100 == 0 &&
      likes_on_page > 9
    ) {
      new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
        alert("Ai fost cel de al " + likes_on_page + "-lea fan al paginii.");

        width = likes_on_page / 10 + "%";
      });
    }

    title.innerHTML =
      list_titles[likes_on_page % 5] + " LIFE " + list_emoji[likes_on_page % 5];
  }

  render() {
    return (
      <>
        <div class="like_div">
          <button id="like_button" onClick={() => this.handleClick()}>
            &#10084;
          </button>
          <h3 id="like_counter">{likes_on_page}</h3>
          <div id="myProgress animate">
            <div id="myBar" style={{ width: width }}></div>
          </div>
        </div>
      </>
    );
  }
}
