// src/components/ParticleBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#00f7ff" },
          links: {
            color: "#00f7ff",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            speed: 1
          },
          number: { value: 35 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } }
        },
        detectRetina: true
      }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}
    />
  );
}

export default ParticleBackground;
