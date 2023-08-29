import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { displayText } from "../../data/lang";

import "./_style.scss";

interface fisioHomeProps {
    lang?: displayText,
}

export default function FisioHome(props: fisioHomeProps) {
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

    console.log(props.lang);

    return (
        <div id="fisio-home" ref={el} className="container">
            <section className="panel one">
                <h1>{props.lang?.pages?.fisioHome.one.title}</h1>
            </section>
            <section className="panel two">
                <div className="content">
                    <h2>{props.lang?.pages?.fisioHome.two.title}</h2>
                    <p>{props.lang?.pages?.fisioHome.two.text}</p>
                </div>
            </section>
            <section className="panel three">
                <div className="content">
                    <div className="content-div">
                        <h2>{props.lang?.pages?.fisioHome.three.title}</h2>
                        <p>{props.lang?.pages?.fisioHome.three.text}</p>
                    </div>
                    <div className="content-div">
                        <ol>
                            <li>
                                <h3>{props.lang?.pages?.fisioHome.three.itens[0].title}</h3>
                                <p>{props.lang?.pages?.fisioHome.three.itens[0].text}</p>
                            </li>
                            <li>
                                <h3>{props.lang?.pages?.fisioHome.three.itens[1].title}</h3>
                                <p>{props.lang?.pages?.fisioHome.three.itens[1].text}</p>
                            </li>
                            <li>
                                <h3>{props.lang?.pages?.fisioHome.three.itens[2].title}</h3>
                                <p>{props.lang?.pages?.fisioHome.three.itens[2].text}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="panel four">
                <div className="content">
                    <div className="text">
                        <h2><span>{props.lang?.pages?.fisioHome.four.title}</span></h2>
                        <p><span>{props.lang?.pages?.fisioHome.four.text}</span></p>
                    </div>
                    <div className="image">
                        <img src="/static/img/fisio-home/phone.png" alt="User interface" />
                    </div>
                </div>
            </section>
            <section className="panel five">
                <div className="content">
                    <div className="content-div">
                        <h2>{props.lang?.pages?.fisioHome.five.title}</h2>
                        <p>{props.lang?.pages?.fisioHome.five.text}</p>
                    </div>
                    <div className="content-div">
                        <p>{props.lang?.pages?.fisioHome.five.itens[0].text}</p>
                        <p>{props.lang?.pages?.fisioHome.five.itens[1].text}</p>
                        <p>{props.lang?.pages?.fisioHome.five.itens[2].text}</p>
                    </div>
                </div>
            </section>
            <section className="panel six">
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
                <a href="/static/docs/td_short_paper_final.pdf" target="_blank">{props.lang?.pages?.fisioHome.six.button}</a>
            </section>
        </div>
    );
}