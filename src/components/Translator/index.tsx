import { useTranslations } from 'next-intl';

export default function Translator({ path }: { path: string }) {
    const t = useTranslations();
    return t(path);
}