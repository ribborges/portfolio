import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ locale: string }>
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang="en">
            <body className={`text-zinc-950 dark:text-zinc-100 ${notoSans.className}`}>
                <AnimBackground />
                <NextIntlClientProvider messages={messages}>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}