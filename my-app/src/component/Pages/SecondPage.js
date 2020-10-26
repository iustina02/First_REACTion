import React, { Component } from "react";
import { Title } from "../commonForPage/title";
import { Like } from "../commonForPage/likes";
import { Content } from "../commonForPage/content";
import { Footer } from "../commonForPage/footer";

var secondPage_content = {
  src: "https://ichef.bbci.co.uk/images/ic/1200x675/p07shn0x.jpg",
  nextPage: "thirdPage",
  content:
    "          Este o greșeală să se creadă că urșii se mișcă încet, greoi și neîndemânatic. În realitate, față de masivitatea evidentă a corpului, ei aleargă repede și sunt rezistenți, iar în mișcări sunt atenți și preciși. Ei pot umbla și pe picioarele posterioare, se pot cățăra pe arbori, îndeosebi speciile de talie mai mică și înoată bine.",
};

var likes = 0;

export class SecondPage extends Component {
  componentDidMount() {
    if (localStorage.getItem("secondPage")) {
      likes = localStorage.getItem("secondPage");
    }
  }
  render() {
    return (
      <body id="theme_change_body">
        <Title name="WILD" emoji="🎥" />

        <Like number_likes={likes} name_page="secondPage" />

        <Content
          src={secondPage_content.src}
          nextPage={secondPage_content.nextPage}
          content={secondPage_content.content}
        />

        <Footer />
      </body>
    );
  }
}
