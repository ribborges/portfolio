import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';

import AnimBackground from "@/components/AnimBackground";
import ToastProvider from "@/providers/ToastProvider";

import "@/styles/global.css";

const notoSans = Noto_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false
});

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
            <body className={`text-zinc-950 dark:text-zinc-100 ${notoSans.className}`}>
                <AnimBackground />
                <ToastProvider>
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}