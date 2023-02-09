import "./Intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Programmer", "Web Developer", "Pentester"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man2.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrap">
          <h2>Hi There, I'm</h2>
          <h1>Sai Srinivas</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
