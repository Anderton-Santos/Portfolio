

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import styles from './animation.module.css';

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "#050505" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: { push: { distance: 200, duration: 15 }, grab: { distance: 150 } },
    },
    particles: {
      color: { value: "#a10606" },
      links: { color: "#FFF", distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "bounce" }, random: true },
      number: { density: { enable: true }, value: 150 },
      opacity: { value: 1.0 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return <Particles className={styles.anime} id={props.id} options={options} />;
};

export default ParticlesComponent;
