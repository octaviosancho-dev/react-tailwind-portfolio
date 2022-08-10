import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

const Particle = () => {

  const particlesInit = async (main) => {

    await loadFull(main);
  };
  
  return (
    <Particles
    id="tsparticles"
      init={particlesInit}
      options={
        {
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 100,
                duration: 0.4,
                line_linked: {
                  opacity: 0.5
                }
              },
            },
          },
          particles: {
            color: {
              value: "#4956D2",
            },
            links: {
              color: "#979EDB",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 1 },
            },
          },
          detectRetina: true,  
        }
      }
    />
  )
}

export default Particle;