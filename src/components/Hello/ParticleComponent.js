import React from "react";
import Particles from "react-particles-js";
import { ParticleWrapper } from "./ParticleStyle";

export default () => (
  <ParticleWrapper>
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </ParticleWrapper>
);
