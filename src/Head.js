import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  const title = "Rei Yoshizawa Portfolio Website";
  const url = "https://reiyoshizawa.com/";
  const og_image =
    "https://reiyoshizawa.com/public_html/static/media/project_example03.jpg";
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og_image} />
    </Helmet>
  );
};

export default Head;
