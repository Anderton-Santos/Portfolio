// import { IoMdArrowDropdown } from "react-icons/io";

import { FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";

import styles from './contato.module.css'

export default function Contato() {
    return (
        <div>
            <section className={styles.main}>
                <div className={styles.titleMain}>
                    <span>99 Bugs? <br />1 Clean code!</span>

                    <span className='text-xl}'>Entre em contato!</span>

                </div>

                <a className={styles.bttn} href="https://outlook.live.com/mail/0/" target="_blank">
                    <button>Mandar mensagem</button>
                </a>

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
            </section>

        </div>
    )
}