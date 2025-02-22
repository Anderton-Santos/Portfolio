import styles from './projects.module.css'

import mockup from '../../assets/mockups/mockuo_Onee.png'
import mockupTwo from '../../assets/mockups/mockup_Two.png'
import mockupTrhe from '../../assets/mockups/mockup_trhee.png'

export default function Projects() {
    return (
        <div>

            <div className='flex flex-col justify-center items-center p-16'>
                <span className={styles.titleProjects}>Projetos em destaques</span>
                <span className={styles.subtitleProjects}>Alguns dos projetos que construi ao longo de minhas experiências.</span>
            </div>

            <section className={styles.main}>

                <div className={styles.projectsMain}>

                    {/* <div className={styles.textProject} data-aos="fade-right">
                        <span>CloseDely é uma plataforma que organiza pedidos de forma eficiente.
                            Os usuários inserem as informações, e o sistema realiza cálculos
                            automáticos, separando os dados por diferentes plataformas.
                            Ideal para otimizar a gestão de vendas e melhorar a produtividade. </span>
                    </div> */}

                    <div className={styles.project} data-aos="zoom-in">
                        <img  className={styles.projectOne} src={mockup} alt="" />

                    </div>

                    <div className={styles.textProject} data-aos="fade-right">
                    <span>CloseDely é uma plataforma que organiza pedidos de forma eficiente.
                            Os usuários inserem as informações, e o sistema realiza cálculos
                            automáticos, separando os dados por diferentes plataformas.
                            Ideal para otimizar a gestão de vendas e melhorar a produtividade. </span>
                    </div>

                </div>

                <div className={styles.projectsMainTwo}>

                    <div className={styles.projectTwo} data-aos="zoom-in">
                        <img src={mockupTrhe} alt="" />
                    </div>

                    <div className={styles.textProjectTwo} data-aos="fade-left">
                        <span>O GynFun é uma loja virtual de roupas com estampas divertidas,
                            oferecendo uma experiência de compra fácil, intuitiva e segura.
                            Com um design didático e moderno, o site garante navegação simples
                            para os clientes, facilitando a escolha e compra dos produtos.</span>
                    </div>




                </div>


                <div className={styles.projectsMain}>

                    {/* <div className={styles.textProject} data-aos="fade-right">
                        <span>O CloneDelivery é uma réplica de um site de aprensentação de uma plataforma
                            de delivery desenvolvida para aprimorar habilidades em desenvolvimento web.
                            O projeto foi criado para praticar tecnologias como HTML, CSS, JavaScript e React,
                            recriando a estrutura, o design e as funcionalidades.
                            O foco foi entender melhor a arquitetura de sites modernos,
                            otimizar a usabilidade e aperfeiçoar boas práticas de desenvolvimento. </span>
                    </div> */}

                    <div className={styles.project} data-aos="zoom-in">
                        <img src={mockupTwo} alt="" />
                    </div>

                    <div className={styles.textProject} data-aos="fade-right">
                    <span>O CloneDelivery é uma réplica de um site de aprensentação de uma plataforma
                            de delivery desenvolvida para aprimorar habilidades em desenvolvimento web.
                            O projeto foi criado para praticar tecnologias como HTML, CSS, JavaScript e React,
                            recriando a estrutura, o design e as funcionalidades.
                            O foco foi entender melhor a arquitetura de sites modernos,
                            otimizar a usabilidade e aperfeiçoar boas práticas de desenvolvimento. </span>
                    </div>

                </div>











            </section>

        </div>
    )
}