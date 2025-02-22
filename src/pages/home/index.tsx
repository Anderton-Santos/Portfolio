
import ParticlesComponent from '../../components/animation/animation';
import Infinite from '../../components/barNavigate/barinfinite';
import styles from './home.module.css';
import logoAvatar from '../../assets/logoTitle.jpeg';
import Skills from '../../components/skills/skill';
import Projects from '../../components/projects/index'
import Contato from '../../components/contato/index'

import { FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";




export function Home() {
  return (
    <div className="min-h-screen">
      <header className="relative flex flex-col min-h-screen pb-10">
        <ParticlesComponent id="tsparticles" />
        
        <div className="relative flex items-center p-16">
          <img className="w-[100px] h-[110px] object-cover overflow-hidden rounded-[30px] border-4 border-[#a10606]" src={logoAvatar} alt="Avatar" />

          <h3 className="relative text-white text-2xl leading-5 ml-4">
            Anderton Dev
            <span className="block text-sm text-gray-300">Developer && Freelancer</span>
          </h3>
        </div>

        <div className={styles.titlespanmain}>
          <h2 className={styles.titlespan}>
            Oi! meu nome é Anderton, Desenvolvedor Front-End | 
            Especializando-se em MERN Stack

            <div className={styles.redes}>
                    <a 
                    href="https://www.instagram.com/" target="_blank">
                        <i><FaInstagram /></i>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/anderton-silva-165a32289/" target="_blank">
                        <i><FaLinkedin /></i>
                    </a>

                    <a 
                    href="https://github.com/" target="_blank">
                        <i><FaGithub /></i>
                    </a>




                </div>
          </h2>

          

        </div>

        <div>
          <Infinite />
        </div>
      </header>

      <section className="min-h-screen bg-[#050505] text-white"> {/* Força a altura e espaço para rolar */}
        <Skills />
      </section>

      <section className="min-h-screen  bg-[#050505] text-white">
        <Projects/>
      </section>

      <section className="min-h-screen  bg-[#050505] text-white">
        <Contato/>
      </section>
    </div>
  );
}
