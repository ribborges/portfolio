export interface displayText {
    nav: {
        home: string,
        about: string,
        portfolio: string,
    },
    header: {
        h3: string,
        h1: string,
        h2: string,
    },
    about: {
        text: string,
    },
    portfolio: Array<{
        title: string,
        project: Array<{
            title: string,
            text: string,
            btn: Array<string>
        }>,
    }>,
    pages?: {
        fisioHome: {
            one: {
                title: string
            },
            two: {
                title: string,
                text: string
            },
            three: {
                title: string,
                text: string,
                itens: Array<{
                    title: string,
                    text: string
                }>
            },
            four: {
                title: string,
                text: string
            },
            five: {
                title: string,
                text: string,
                itens: Array<{
                    text: string
                }>
            },
            six: {
                button: string
            }
        }
    }
}

export const en: displayText = {
    nav: {
        home: "Home",
        about: "About me",
        portfolio: "Portfolio",
    },
    header: {
        h3: "Hi there 🫡",
        h1: "I'm Richard Borges",
        h2: "Front-end developer",
    },
    about: {
        text: "I'm a Front-end developer, I have a communicative profile and I consider myself extremely creative. I've been passionate about technology since I was a kid. I started my studies in the area with a certificate program of computer technician and, soon after, with the bachelor degree of computer science at the Pontifical Catholic University of Minas Gerais. My main skills are focused on Front-end development such as: HTML, CSS, JavaScript, TypeScript, Node, React and SASS. I also have deep knowledge in non-relational databases such as MongoDB and I'm a great enthusiast in game development with Unreal (C++ and Blueprints).",
    },
    portfolio: [{
        title: "Web",
        project: [{
            title: "CV Creator",
            text: "Create your CV/Resume with this simple tool developed using React, TypeScript, Vite, SCSS and ReactPDF",
            btn: ["Demo", "Code"]
        }, {
            title: "Habits",
            text: "Rocketseat NLW Setup - Ignite",
            btn: ["Code"]
        }, {
            title: "Rocketnews",
            text: "Rocketseat newsletter challenge",
            btn: ["Demo", "Code"]
        }, {
            title: "Social tree",
            text: "Rocketseat social tree challenge",
            btn: ["Demo", "Code"]
        }, {
            title: "Portfolio",
            text: "Rocketseat portfolio challenge",
            btn: ["Demo", "Code"]
        }, {
            title: "Attendance list",
            text: "Rocketseat - Attendance list",
            btn: ["Demo", "Code"]
        }, {
            title: "Alura studies",
            text: "Studie list with stopwatch",
            btn: ["Demo", "Code"]
        }, {
            title: "Multiplication table",
            text: "Multiplication table for web developed for the class 'Special topics in computing I'",
            btn: ["Demo", "Code"]
        }, {
            title: "Students",
            text: "Student registration for web developed for the class 'Special topics in computing I'",
            btn: ["Demo", "Code"]
        }],
    }, {
        title: "Mobile",
        project: [{
            title: "Fisio Home",
            text: "The application was developed during the 'Graduation Project' discipline. It was built using React Native (Expo) for the front-end and Node.js for the back-end, along with various packages such as Express.js, Mongoose, Axios, and others. The database was developed using MongoDB.",
            btn: ["Details"]
        }, {
            title: "Cat Fact App",
            text: "Get random cat facts and a cute image :3 Developed using React Native",
            btn: ["Code"]
        }]
    }],
    pages: {
        fisioHome: {
            one: {
                title: "Fisio Home"
            },
            two: {
                title: "Abstract",
                text: "The Fisio Home Pro project, developed in partnership between the Computer Science and Physical Therapy courses at the Pontifical Catholic University, Poços de Caldas campus, aims to establish a remote connection between patients in the process of post-stroke (cerebrovascular accident) recovery and the physical therapy professionals present on campus. With the goal of continuing the project, the focus is on the evolution of the back-end and front-end of the mobile application. In this way, the aim is to provide an efficient and effective approach between patients and physical therapy experts through the use of technology."
            },
            three: {
                title: "React Native",
                text: "React Native is a framework developed by Meta (Facebook) that allows the use of web technologies (JavaScript) for native mobile application development.",
                itens: [{
                    title: "Cross-platform development",
                    text: "React Native allows the development of applications for iOS and Android using a single codebase."
                }, {
                    title: "Native performance",
                    text: "Components are rendered through native APIs, enabling near-native performance."
                }, {
                    title: "Active community",
                    text: "Active and growing community, in addition to being maintained by Meta."
                }]
            },
            four: {
                title: "Pleasant interface",
                text: "The use of web technologies such as React Native, Node.js, and JavaScript will allow us to explore the full potential of a pleasant and functional mobile interface, ensuring an enhanced user experience for Fisio Home Pro users."
            },
            five: {
                title: "Powering the back-end",
                text: "In order to boost scalability and facilitate smoother integration with the front-end developed in React Native, the application's back-end was developed using Node.js.",
                itens: [{
                    text: "- JavaScript platform based on the Chromium V8 engine."
                }, {
                    text: "- Enables higher performance and scalability."
                }, {
                    text: "- Event-driven architecture and asynchronous I/O."
                }]
            },
            six: {
                button: "Download article"
            }
        }
    }
};

export const pt: displayText = {
    nav: {
        home: "Home",
        about: "Sobre mim",
        portfolio: "Portfólio",
    },
    header: {
        h3: "Olá 🫡",
        h1: "Sou Richard Borges",
        h2: "Desenvolvedor front-end",
    },
    about: {
        text: "Sou desenvolvedor Front-end, tenho um perfil comunicativo e me considero extremamente criativo. Sou apaixonado por tecnologia desde pequeno. Iniciei meus estudos na área com o curso de técnico de informática na ETEC e, logo em seguida, para o curso de ciência da computação na PUC Minas. Minhas principais habilidades são voltadas ao desenvolvimento Front-end como: HTML, CSS, JavaScript, TypeScript, React e SASS. Também tenho profundo conhecimento em bases de dados não relacionais, como MongoDB e sou grande entusiasta no desenvolvimento de jogos com Unreal (C++) e Unity (C#).",
    },
    portfolio: [{
        title: "Web",
        project: [{
            title: "Criador de CV",
            text: "Crie seu currículo com essa ferramenta simples desenvolvida em React, TypeScript, Vite, SCSS e ReactPDF",
            btn: ["Demo", "Código"]
        }, {
            title: "Habits",
            text: "Rocketseat NLW Setup - Ignite",
            btn: ["Código"]
        }, {
            title: "Rocketnews",
            text: "Desafio Rocketseat newsletter",
            btn: ["Demo", "Código"]
        }, {
            title: "Social tree",
            text: "Desafio Rocketseat social tree",
            btn: ["Demo", "Código"]
        }, {
            title: "Portfolio",
            text: "Desafio Rocketseat portfolio",
            btn: ["Demo", "Código"]
        }, {
            title: "Lista de presença",
            text: "Rocketseat - Lista de presença",
            btn: ["Demo", "Código"]
        }, {
            title: "Alura studies",
            text: "Lista de estudos com cronômetro",
            btn: ["Demo", "Código"]
        }, {
            title: "Tablea de multiplicação",
            text: "Tabela de multiplicação desenvolvida para a matéria de 'Tópicos especiais em computação I'",
            btn: ["Demo", "Código"]
        }, {
            title: "Students",
            text: "Registro de alunos desenvolvida para a matéria de 'Tópicos especiais em computação I'",
            btn: ["Demo", "Código"]
        }],
    }, {
        title: "Mobile",
        project: [{
            title: "Fisio Home",
            text: "A aplicação desenvolvida durante a disciplina de 'Trabalho de Diplomação'. Foi densenvolvida em React Native (Expo) no front-end e Node.js no back-end em conjunto com alguns pacotes como: Express.js, Mongoose, Axios e outros. A base de dados foi desenvolvida em MongoDB.",
            btn: ["Detalhes"]
        }, {
            title: "Cat Fact App",
            text: "Veja fatos aleatórios sobre gatos junto de uma imagem fofinha :3 Desenvolvido com React Native",
            btn: ["Código"]
        }]
    }],
    pages: {
        fisioHome: {
            one: {
                title: "Fisio Home"
            },
            two: {
                title: "Resumo",
                text: "O projeto Fisio Home Pro, desenvolvido em parceria entre os cursos de  Ciência da Computação e Fisioterapia da Pontifícia Universidade  Católica, campus Poços de Caldas, visa estabelecer uma conexão remota  entre pacientes em processo de recuperação pós-acidente vascular  encefálico (AVE) e os profissionais de fisioterapia presentes no campus.  Com o objetivo de dar continuidade ao projeto, foca-se na evolução do  back-end e front-end da aplicação mobile. Dessa forma, busca-se  proporcionar uma aproximação eficiente e eficaz entre os pacientes e os  especialistas em fisioterapia, por meio do uso da tecnologia."
            },
            three: {
                title: "React Native",
                text: "O React Native é uma framework desenvolvido pela Meta (Facebook) que permite o uso de tecnologias web (JavaScript) para o desenvolvimento de aplicações mobile nativas.",
                itens: [{
                    title: "Desenvolvimento multiplataforma",
                    text: "O React Native permite o desenvolvimento de aplicações para iOS e Android usando uma única base de código."
                }, {
                    title: "Performance nativa",
                    text: "Componentes que são renderizados através de APIs nativas, permitindo desempenho próximo ao nativo."
                }, {
                    title: "Comunidade ativa",
                    text: "Comunidade ativa e em crescimento, além de ser mantido pela Meta."
                }]
            },
            four: {
                title: "Interface agradável",
                text: "A utilização de tecnologias web, como React Native, Node.js e JavaScript, permitirá explorar todo o potencial de uma interface mobile agradável e funcional, garantindo assim uma experiência de uso aprimorada para os usuários do Fisio Home Pro."
            },
            five: {
                title: "Potencializando o back-end",
                text: "A fim de impulsionar a escalabilidade e promover uma integração mais fluída com o front-end desenvolvido em React Native, o back-end da aplicação foi desenvolvido utilizando o Node.js.",
                itens: [{
                    text: "- Plataforma JavaScript baseada no V8 do Chromium."
                }, {
                    text: "- Permite maior desempenho e escalabilidade."
                }, {
                    text: "- Arquitetura orientada a eventos e I/O assíncrono."
                }]
            },
            six: {
                button: "Baixar artigo"
            }
        }
    }
};