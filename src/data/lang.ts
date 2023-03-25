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
    portfolio: {
        project: Array<{
            title: string,
            text: string,
            btn: Array<string>
        }>,
    },
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
    portfolio: {
        project: [{
            title: "CV Creator",
            text: "Create your CV/Resume with this simple tool developed using React, TypeScript, Vite, SCSS and ReactPDF",
            btn: ["Demo", "Code"]
        },{
            title: "Habits",
            text: "Rocketseat NLW Setup - Ignite",
            btn: ["Code"]
        },{
            title: "Rocketnews",
            text: "Rocketseat newsletter challenge",
            btn: ["Demo", "Code"]
        },{
            title: "Social tree",
            text: "Rocketseat social tree challenge",
            btn: ["Demo", "Code"]
        },{
            title: "Portfolio",
            text: "Rocketseat portfolio challenge",
            btn: ["Demo", "Code"]
        },{
            title: "Attendance list",
            text: "Rocketseat - Attendance list",
            btn: ["Demo", "Code"]
        },{
            title: "Alura studies",
            text: "Studie list with stopwatch",
            btn: ["Demo", "Code"]
        },{
            title: "Multiplication table",
            text: "Multiplication table for web developed for the class 'Special topics in computing I'",
            btn: ["Demo", "Code"]
        },{
            title: "Students",
            text: "Student registration for web developed for the class 'Special topics in computing I'",
            btn: ["Demo", "Code"]
        }],
    },
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
    portfolio: {
        project: [{
            title: "Criador de CV",
            text: "Crie seu currículo com essa ferramenta simples desenvolvida em React, TypeScript, Vite, SCSS e ReactPDF",
            btn: ["Demo", "Código"]
        },{
            title: "Habits",
            text: "Rocketseat NLW Setup - Ignite",
            btn: ["Código"]
        },{
            title: "Rocketnews",
            text: "Desafio Rocketseat newsletter",
            btn: ["Demo", "Código"]
        },{
            title: "Social tree",
            text: "Desafio Rocketseat social tree",
            btn: ["Demo", "Código"]
        },{
            title: "Portfolio",
            text: "Desafio Rocketseat portfolio",
            btn: ["Demo", "Código"]
        },{
            title: "Lista de presença",
            text: "Rocketseat - Lista de presença",
            btn: ["Demo", "Código"]
        },{
            title: "Alura studies",
            text: "Lista de estudos com cronômetro",
            btn: ["Demo", "Código"]
        },{
            title: "Tablea de multiplicação",
            text: "Tabela de multiplicação desenvolvida para a matéria de 'Tópicos especiais em computação I'",
            btn: ["Demo", "Código"]
        },{
            title: "Students",
            text: "Registro de alunos desenvolvida para a matéria de 'Tópicos especiais em computação I'",
            btn: ["Demo", "Código"]
        }],
    },
};