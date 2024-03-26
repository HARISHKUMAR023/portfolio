// import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
   // this should be run only once per application lifetime
   useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "rgb(255, 72, 1)",
        },
        links: {
          color: "rgb(231, 229, 228)",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
  // const ParticlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);
  // const ParticlesLoaded = useCallback(async () => {}, []);

  // return (
  //   <Particles
  //     className="w-full h-full absolute translate-z-0"
  //     id="tsparticles"
  //     init={ParticlesInit}
  //     loaded={ParticlesLoaded}
  //     options={{
  //       fullScreen: { enable: false },
  //       background: {
  //         color: {
  //           value: "#000",
  //         },
  //       },
  //       fpsLimit: 120,
  //       interactivity: {
  //         events: {
  //           onClick: {
  //             enable: false,
  //             mode: "push",
  //           },
  //           onHover: {
  //             enable: true,
  //             mode: "repulse",
  //           },
  //           resize: true,
  //         },
  //         modes: {
  //           // bubble:{
  //           //   distance:400,
  //           //   duration:2,
  //           //   opacity:0.8,
  //           //   size:40
  //           // },
  //           push: {
  //             quantity: 90,
  //           },
  //           repulse: {
  //             distance: 200,
  //             duration: 0.4,
  //           },
  //         },
  //       },
  //       particles: {
  //         color: {
  //           value: "#e68e2e",
  //         },
  //         links: {
  //           color: "#f5d393",
  //           distance: 150,
  //           enable: true,
  //           opacity: 0.4,
  //           width: 1,
  //         },
  //         collisions: {
  //           enable: true,
  //         },
  //         move: {
  //           direction: "none",
  //           enable: true,
  //           outMode: {
  //             default: "bounce",
  //           },
  //           random: false,
  //           speed: 1,
  //           straight: false,
  //         },
  //         number: {
  //           density: {
  //             enable: true,
  //             area: 800,
  //           },
  //           value: 80,
  //         },
  //         opacity: {
  //           value: 0.5,
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         size: {
  //           value: { min: 1, max: 3 },
  //         },
  //       },
  //       detectRetina: true,
  //     }}
  //   />
  // );
  // <div>ParticlesContainer</div>
};

export default ParticlesContainer;
