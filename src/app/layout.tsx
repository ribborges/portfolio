import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google'
import GlobalStyle from "../styles/globalStyles";
 
const ubuntu = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Richard de Carvalho Borges",
    description: "Meu portfólio de projetos desenvolvido com Next.js",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <GlobalStyle />
            <body className={ubuntu.className}>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}