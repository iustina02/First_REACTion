import React, { Component } from "react";
import { Title } from "../commonForPage/title";
import { Like } from "../commonForPage/likes";
import { Content } from "../commonForPage/content";
import { Footer } from "../commonForPage/footer";

var firstPage_content = {
  src: "https://ichef.bbci.co.uk/images/ic/1200x675/p07sdvf1.jpg",
  nextPage: "secondPage",
  content:
    "Ursidele (Ursidae) sau urșii sunt o familie de mamifere mari din subordinul Caniformia răspândite în emisfera nordică, existând câteva specii și în America de Sud. Sunt animale omnivore de talie mare, voluminoase și masive, cu coadă scurtă și, de regulă, ascunsă între perii blănii, cu cap rotund, bot alungit și, de obicei, trunchiat, gât scurt și gros, urechi scurte și ochi relativ mici, negri sau cafenii. Labele au câte cinci degete prevăzute cu gheare puternice, încovoiate și neretractile.",
};

var likes = 0;

export class FirstPage extends Component {
  componentDidMount() {
    if (localStorage.getItem("home")) {
      likes = localStorage.getItem("home");
    }
  }
  render() {
    return (
      <body id="theme_change_body">
        <Title name="WILD" emoji="🎥" />

        <Like number_likes={likes} name_page="home" />

        <Content
          src={firstPage_content.src}
          nextPage={firstPage_content.nextPage}
          content={firstPage_content.content}
        />

        <Footer />
      </body>
    );
  }
}
