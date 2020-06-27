import React, { memo, useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import * as Styled from "./styled";

export const AboutMe = memo(() => {
  const [isIn, setIn] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    const [entry] = entries;
    entry.isIntersecting ? setIn(true) : setIn(false);
  };
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    const target = document.getElementById("target");
    target && observer.observe(target);
  });

  return (
    <Styled.Container id="target">
      {/* <Styled.Hello>Hello, </Styled.Hello> */}
      <Transition in={isIn} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <>
            <Styled.Name
              style={{
                ...defName,
                ...transName[state]
              }}
            >
              Pavel <span>Yarakhovich.</span>
            </Styled.Name>
            <Styled.Job
              style={{
                ...defJob,
                ...transJob[state]
              }}
            >
              Frontend Web Developer for Omertex LTD, Minsk, Belarus
            </Styled.Job>
          </>
        )}
      </Transition>
    </Styled.Container>
  );
});

const defName = {
  opacity: 0,
  transform: "scale(1.2) translateY(-50px) translateX(150px)",
  transition: "all 300ms ease-out",
};
const transName = {
  entering: { opacity: 0, transform: "scale(1.4) translateY(-50px) translateX(150px)" },
  entered: { opacity: 1, transform: "scale(1) translateY(0) translateX(0)" },
  exiting: { opacity: 0, transform: "scale(1.2) translateY(-50px) translateX(150px)" },
  exited: { opacity: 0, transform: "scale(1.2) translateY(-50px) translateX(150px)" },
  unmounted: {}
};
const defJob = {
  opacity: 0,
  transform: "translateY(60px) translateX(-60px)",
  transition: "all 300ms ease-out 250ms",
};
const transJob = {
  entering: { opacity: 0, transform: "translateY(60px) translateX(-60px)" },
  entered: { opacity: 1, transform: "translateY(0) translateX(-0)" },
  exiting: { opacity: 0, transform: "translateY(60px) translateX(-60px)" },
  exited: { opacity: 0, transform: "translateY(60px) translateX(-60px)" },
  unmounted: {}
}