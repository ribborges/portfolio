import styled from "styled-components";

const Container = styled.div`
    color: black;
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;

    overflow-x: hidden;
    overflow-y: scroll;
`;

const Panel = styled.section`
    height: 100vh;
    width: 100vw;
    padding: 10vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    scroll-snap-align: start;

    h1 {
        font-size: 8rem;
    }

    h2 {
        font-size: 4rem;
    }

    h3 {
        font-size: 2rem;
    }

    p {
        margin: 15px;
        font-size: 1.5rem;
        text-align: justify;
    }

    * {
        z-index: 1;
    }

    .content {
        display: flex;
        text-align: center;
        width: 65%;
        height: 80%;
        gap: 20px;

        .content-div {
            flex: 1;
        }
    }

    @media screen and (max-width: 1400px) {
        padding: 5vw;

        h1 {
            font-size: 6rem;
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            margin: 10px;
            font-size: 1rem;
        }

        .content {
            width: 75%;
            height: 80%;
            gap: 10px;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 5vw;

        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            margin: 15px;
            font-size: 1rem;
            text-align: justify;
        }

        .content {
            width: 95%;
            gap: 10px;
            flex-direction: column;
        }
    }
`;

const PanelOne = styled(Panel)`
    color: #54ff77;
    background-color: #54ff77;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        width: 45vw;
        height: 45vw;
        background-color: black;
        border-radius: 50%;
    }

    * {
        color: #54ff77;
    }

    @media screen and (max-width: 1400px) {
        &::after {
            width: 70vw;
            height: 70vw;
        }
    }

    @media screen and (max-width: 600px) {
        &::after {
            width: 85vw;
            height: 85vw;
        }
    }
`;

const PanelTwo = styled(Panel)`
    background-color: #54ff77;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: -15vw;
        left: -15vw;
        width: 30vw;
        height: 30vw;
        background-color: black;
        border-radius: 50%;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -15vw;
        right: -15vw;
        width: 30vw;
        height: 30vw;
        background-color: black;
        border-radius: 50%;
    }

    @media screen and (max-width: 600px) {
        &::before {
            top: -15vw;
            left: -15vw;
            width: 50vw;
            height: 50vw;
        }

        &::after {
            bottom: -20vw;
            right: -20vw;
            width: 50vw;
            height: 50vw;
        }
    }
`;

const PanelThree = styled(Panel)`
    background-color: #54ff77;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        bottom: -5vw;
        left: -5vw;
        width: 15vw;
        height: 15vw;
        background-color: black;
        transform: rotate(45deg);
    }

    &::after {
        content: "";
        position: absolute;
        top: -5vw;
        right: -5vw;
        width: 15vw;
        height: 15vw;
        background-color: black;
        transform: rotate(45deg);
    }

    @media screen and (max-width: 600px) {
        &::before {
            bottom: -10vw;
            left: -10vw;
            width: 30vw;
            height: 30vw;
        }

        &::after {
            top: -10vw;
            right: -10vw;
            width: 30vw;
            height: 30vw;
        }
    }
`;

const PanelFour = styled(Panel)`
    background: linear-gradient(to right, #54ff77 50%, black 50%);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        background: linear-gradient(to right, black 50%, #54ff77 50%);
        position: absolute;
        width: 40vw;
        height: 40vw;
        background-color: black;
        border-radius: 50%;
    }

    &::after {
        content: "";
        background: linear-gradient(to right, #54ff77 50%, black 50%);
        position: absolute;
        width: 20vw;
        height: 20vw;
        background-color: black;
        border-radius: 50%;
    }

    .text {
        flex: 1;
        box-sizing: border-box;

        h2, p {
            span {
                color: #54ff77;
                background-color: #000000;
            }
        }
    }

    .content {
        gap: 10%;

        .image {
            flex: 1;
            height: 100%;

            img {
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 600px) {
        &::before {
            width: 90vw;
            height: 90vw;
        }

        &::after {
            width: 45vw;
            height: 45vw;
        }

        .content {
            .image {
                height: 50vh;

                img {
                    height: 100%;
                }
            }
        }
    }
`;

const PanelFive = styled(Panel)`
    background-color: #54ff77;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: -15vw;
        width: 30vw;
        height: 30vw;
        background-color: black;
        border-radius: 50%;
    }

    &::after {
        content: "";
        position: absolute;
        right: -15vw;
        width: 30vw;
        height: 30vw;
        background-color: black;
        border-radius: 50%;
    }

    @media screen and (max-width: 600px) {
        &::before {
            left: auto;
            top: -15vw;
            width: 30vw;
            height: 30vw;
        }

        &::after {
            right: auto;
            bottom: -15vw;
            width: 30vw;
            height: 30vw;
        }
    }
`;

const PanelSix = styled(Panel)`
    background-color: #54ff77;
    position: relative;
    overflow: hidden;

    a {
        color: #54ff77;
        background-color: black;
        padding: 10px;
        border-radius: 15px;

        &:hover {
            color: white;
        }
    }

    .content {
        width: 75%;
    }

    @media screen and (max-width: 600px) {
        background-color: #54ff77;
        position: relative;
        overflow: hidden;

        .content {
            width: 100%;
            gap: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export { Container, PanelOne, PanelTwo, PanelThree, PanelFour, PanelFive, PanelSix};