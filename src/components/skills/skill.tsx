import styles from './skills.module.css'

import html from '../../assets/techs/html.png'
import css from '../../assets/techs/css.png'
import tw from '../../assets/techs/tw.png'
import js from '../../assets/techs/js.png'
import ts from '../../assets/techs/ts.png'
import react from '../../assets/techs/react.png'
import express from '../../assets/techs/express.png'
import node from '../../assets/techs/node.png'
import mongo from '../../assets/techs/mongo.png'
import firebase from '../../assets/techs/firebase.png'
import vite from '../../assets/techs/vite.png'

import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

import Tilt from "react-parallax-tilt";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 3000, once: true });
    }, []);
    return (
        <div>
            <span className={styles.title}>Habilidades</span>

            <section className='p-12'>

                <div className={styles.logoSkills}>
                    <div className={styles.logoSkillsFront} data-aos="fade-up">

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={html} alt="" />
                                <span className={styles.txtLogo}>HTML</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={css} alt="" />
                                <span className={styles.txtLogo}>CSS</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={tw} alt="" />
                                <span className={styles.txtLogo}>TAILWIND CSS</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={js} alt="" />
                                <span className={styles.txtLogo}>JAVA SCRIPT</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={ts} alt="" />
                                <span className={styles.txtLogo}>TYPE SCRIPT</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={react} alt="" />
                                <span className={styles.txtLogo}>REACT</span>
                            </Tilt>
                        </div>

                    </div>

                    <div data-aos="fade-down" data-aos-delay="500" className={styles.textMain} >
                        <span className={styles.textFront}>interfaces fluidas e responsivas utilizando HTML, CSS e Tailwind,
                            garantindo layouts bem estruturados e uma ótima experiência em qualquer dispositivo.
                            Com JavaScript e TypeScript, interatividade e dinamismo, tornando as
                            aplicações mais intuitivas e performáticas. Além disso, React para desenvolver
                            componentes reutilizáveis e escaláveis, focando na melhor experiência do usuário e
                            nas boas práticas de desenvolvimento.</span>
                    </div>


                    <div className={styles.logoSkillsBack} data-aos="fade-up" data-aos-delay="500">

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={express} alt="" />
                                <span className={styles.txtLogo}>EXPRESS</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={node} alt="" />
                                <span className={styles.txtLogo}>NODE JS</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={mongo} alt="" />
                                <span className={styles.txtLogo}>MONGO DB</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={firebase} alt="" />
                                <span className={styles.txtLogo}>FIREBASE</span>
                            </Tilt>
                        </div>

                        <div>
                        <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                scale={1.05}
                                transitionSpeed={1000}
                                className="p-4"
                            >
                                <img src={vite} alt="" />
                                <span className={styles.txtLogo}>VITE</span>
                            </Tilt>
                        </div>

                    </div>

                    <div className={styles.textMain} data-aos="fade-down" data-aos-delay="1000">
                        <span className={styles.textFrontTwo}>Desenvolvendo backends eficientes e escaláveis com Express.js e Node.js,
                            garantindo APIs robustas e seguras. Utilizando MongoDB para armazenamento de dados
                            de forma flexível e otimizada. Com Firebase, implementando autenticação, hospedagem
                            e notificações em tempo real. Para um ambiente de desenvolvimento moderno e ágil,
                            Vite acelera a construção de aplicações, enquanto GitHub facilita o versionamento
                            e a colaboração em projetos, garantindo um fluxo de trabalho organizado e produtivo.</span>
                    </div>







                </div>

            </section>
        </div>
    )
}