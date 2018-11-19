import React from "react";

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  const animation_profile = "introtext";
  const works__title = document.getElementById("works__title");
  const project__title = document.getElementById("project__title");
  const works__item01 = document.getElementById("works__item01");
  const works__item02 = document.getElementById("works__item02");
  const works__item03 = document.getElementById("works__item03");
  const project__item01 = document.getElementById("project__item01");
  const project__item02 = document.getElementById("project__item02");
  const project__item03 = document.getElementById("project__item03");
  const about__title = document.getElementById("about__title");
  const about__subTitle = document.getElementById("about__subTitle");
  const about__text = document.getElementById("about__text");
  const about__img = document.getElementById("about__img");
  // const about__profile = document.getElementById("about__profile");
  if (scrollTop > 340) {
    works__title.classList.add(animation_profile);
  }
  if (scrollTop > 600) {
    works__item01.classList.add(animation_profile);
    works__item02.classList.add(animation_profile);
    works__item03.classList.add(animation_profile);
  }
  if (scrollTop > 800) {
    project__title.classList.add(animation_profile);
  }
  if (scrollTop > 1160) {
    project__item01.classList.add(animation_profile);
    project__item02.classList.add(animation_profile);
    project__item03.classList.add(animation_profile);
  }
  if (scrollTop > 1700) {
    about__title.classList.add(animation_profile);
    about__img.classList.add(animation_profile);
    about__subTitle.classList.add(animation_profile);
    about__text.classList.add(animation_profile);
  }
});

const Animation = () => {
  return <div />;
};

export default Animation;
