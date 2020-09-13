import React from 'react';
import { NextSeo } from 'next-seo';
const SEO = ({ name, path, children }) => {
  switch (name) {
    case 'About':
      name = 'Short Story of My Journey';
      break;
    case 'Projects':
      name = 'All of my projects that i ever do';
      break;
    case 'Contact':
      name = 'My personal contact';
      break;
  }

  const title = `Peerapat portfolio – ${name}`;
  const url = `https://peerapat-ch.dev${path}`;
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  );
};
export default SEO;
