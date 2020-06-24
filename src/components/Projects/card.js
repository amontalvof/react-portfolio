import React from "react";
import { useSpring, animated } from "react-spring";
import { CardWrapper } from "./CardStyle";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card({ project }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const { tech, alt, img, url } = project;

  return (
    <CardWrapper>
      <a href={url} style={{ textDecoration: "none" }}>
        <animated.div
          className="polaroid"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <img src={img} alt={alt} style={{ width: "100%" }} />
          <div className="container">
            <p>{tech}</p>
          </div>
        </animated.div>
      </a>
    </CardWrapper>
  );
}
