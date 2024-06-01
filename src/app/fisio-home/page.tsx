"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, PanelFive, PanelFour, PanelOne, PanelSix, PanelThree, PanelTwo } from "./style";

export default function FisioHome() {
    const el = useRef(null);
    const child = gsap.utils.selector(el);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        child(".panel").forEach((panel) => {
            gsap.config({ nullTargetWarn: false });
            gsap.from(panel.querySelector("h1"), {
                scrollTrigger: {
                    trigger: panel,
                    scroller: el.current,
                    scrub: true
                }
            });
        });
    }, []);

    return (
        <Container>
            <PanelOne>
                <h1>Fisio Home</h1>
            </PanelOne>
            <PanelTwo>
                <div className="content">
                    <h2>Resumo</h2>
                    <p>
                        O projeto Fisio Home Pro, desenvolvido em parceria entre os cursos de Ciência da Computação e Fisioterapia da Pontifícia Universidade  Católica, campus Poços de Caldas, visa estabelecer uma conexão remota  entre pacientes em processo de recuperação pós-acidente vascular  encefálico (AVE) e os profissionais de fisioterapia presentes no campus.  Com o objetivo de dar continuidade ao projeto, foca-se na evolução do  back-end e front-end da aplicação mobile. Dessa forma, busca-se  proporcionar uma aproximação eficiente e eficaz entre os pacientes e os  especialistas em fisioterapia, por meio do uso da tecnologia.
                    </p>
                </div>
            </PanelTwo>
            <PanelThree>
                <div className="content">
                    <div className="content-div">
                        <h2>React Native</h2>
                        <p>
                            O React Native é uma framework desenvolvido pela Meta (Facebook) que permite o uso de tecnologias web (JavaScript) para o desenvolvimento de aplicações mobile nativas.
                        </p>
                    </div>
                    <div className="content-div">
                        <ol>
                            <li>
                                <h3>Desenvolvimento multiplataforma</h3>
                                <p>
                                    O React Native permite o desenvolvimento de aplicações para iOS e Android usando uma única base de código.
                                </p>
                            </li>
                            <li>
                                <h3>Performance nativa</h3>
                                <p>
                                    Componentes que são renderizados através de APIs nativas, permitindo desempenho próximo ao nativo.
                                </p>
                            </li>
                            <li>
                                <h3>Comunidade</h3>
                                <p>
                                    Comunidade ativa e em crescimento, além de ser mantido pela Meta.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </PanelThree>
            <PanelFour>
                <div className="content">
                    <div className="text">
                        <h2><span>Interface agradável</span></h2>
                        <p><span>
                            A utilização de tecnologias web, como React Native, Node.js e JavaScript, permitirá explorar todo o potencial de uma interface mobile agradável e funcional, garantindo assim uma experiência de uso aprimorada para os usuários do Fisio Home Pro.
                        </span></p>
                    </div>
                    <div className="image">
                        <img src="/static/img/fisio-home/phone.png" alt="User interface" />
                    </div>
                </div>
            </PanelFour>
            <PanelFive>
                <div className="content">
                    <div className="content-div">
                        <h2>Potencializando o back-end</h2>
                        <p>
                            A fim de impulsionar a escalabilidade e promover uma integração mais fluída com o front-end desenvolvido em React Native, o back-end da aplicação foi desenvolvido utilizando o Node.js.
                        </p>
                    </div>
                    <div className="content-div">
                        <p>- Plataforma JavaScript baseada no V8 do Chromium.</p>
                        <p>- Permite maior desempenho e escalabilidade.</p>
                        <p>- Arquitetura orientada a eventos e I/O assíncrono.</p>
                    </div>
                </div>
            </PanelFive>
            <PanelSix>
                <div className="content">
                    <div className="content-div">
                        <img src="/static/img/fisio-home/login.jpg" alt="User interface" />
                    </div>
                    <div className="content-div">
                        <img src="/static/img/fisio-home/cadastro.jpg" alt="User interface" />
                    </div>
                    <div className="content-div">
                        <img src="/static/img/fisio-home/exercicios.jpg" alt="User interface" />
                    </div>
                    <div className="content-div">
                        <img src="/static/img/fisio-home/exercicio.jpg" alt="User interface" />
                    </div>
                    <div className="content-div">
                        <video controls>
                            <source src="/static/docs/AppDemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <a href="/static/docs/td_short_paper_final.pdf" target="_blank">Baixar artigo</a>
            </PanelSix>
        </Container>
    );
}