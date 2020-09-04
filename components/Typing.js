import React from 'react';
import Typed from 'react-typed';

export default function Typing() {
  return (
    <section className="Intro">
      <h1 className="Headline">
        <Typed
          loop
          typeSpeed={80}
          backSpeed={20}
          strings={[
            "Hi, my name is <span class='accent'>Peerapat</span> Chanawanno.",
            "I'm a <span class='accent'>Fresh Graduate</span>.",
            "I'm an <span class='accent'>Gamer</span>.",
            "I'm a <span class='accent'>creative</span> person."
          ]}
          smartBackspace
          backDelay={1000}
          loopCount={0}
          showCursor
          cursorChar="|"
          className="typed"
        />
      </h1>
      <p className="text2">
        As a senior front-end engineer with years of experience I create amazing
        websites and web apps to make the internet a better place. to discuss
        how we can work together.
      </p>
    </section>
  );
}
