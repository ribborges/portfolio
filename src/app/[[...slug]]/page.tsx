import { ClientOnly } from "./client";

import "../../style/_style.scss";

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function Page() {
    return <ClientOnly />;
}