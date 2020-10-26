import React from "react";
import { Title } from "../commonForPage/title";
import { Like } from "../commonForPage/likes";
import { Content } from "../commonForPage/content";
import { Footer } from "../commonForPage/footer";

const thirtPage_content = {
  src: "https://cdn.mos.cms.futurecdn.net/3n8tRry6fYg7sNyhFDPQwR.jpg",
  nextPage: "home",
  content:
    "        Panda mare trăiește în câteva lanțuri muntoase din China centrală, în principal în Sichuan, dar de asemenea și în învecinatele Shaanxi și Gansu. În puținele populații cu efectiv redus, ce trăiesc în pădurile montane ale Chinei Centrale, urșii panda sunt printre cele mai rare mamifere de pe glob.",
  moreInfo: "O specie vulnerabila !",
};

var likes = 0;

export class ThirdPage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("thirdPage")) {
      likes = localStorage.getItem("thirdPage");
    }
  }

  render() {
    return (
      <body id="theme_change_body">
        <Title name="WILD" emoji="🎥" />
        <Like number_likes={likes} name_page="thirdPage" />
        <Content
          src={thirtPage_content.src}
          nextPage={thirtPage_content.nextPage}
          content={thirtPage_content.content}
          moreInfo={thirtPage_content.moreInfo}
        />
        <Footer />
      </body>
    );
  }
}
