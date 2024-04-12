import type { Metadata } from "next";

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
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}