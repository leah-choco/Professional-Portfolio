import React from "react";

import "../../assets/App.css";

//My photo
//Component with short life story

export default function About() {
  return (
    <div>
      <h1 className="my-name">Leah Choco</h1>
      <img src="./assets/images/IMG_1381.JPG" alt="" className="Leah-image" />
      <p className="about-me">
        I currently reside in Middle Tennessee. Juan, my husband, and I are
        raising three children. We recently decided that I should complete a
        coding bootcamp to be certified in MERN. I am incredibly motivated to
        continue my education. This is the place to find links to my projects,
        and to all the other resources showing my work and experience.
      </p>
    </div>
  );
}
