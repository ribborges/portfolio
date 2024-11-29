import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import AnimBackground from "../components/AnimBackground";
//import GlobalStyle from "../styles/globalStyles";

const ubuntu = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"], display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
    title: "Richard de Carvalho Borges",
    description: "Meu portfólio de projetos desenvolvido com Next.js",
}

import "../styles/global.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*<GlobalStyle />*/}
            <body className={`text-zinc-950 dark:text-zinc-100 ${ubuntu.className}`}>
                <AnimBackground />
                {children}
            </body>
        </html>
    );
}