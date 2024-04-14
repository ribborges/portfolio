import { ClientOnly } from "./client";

import "../../style/style.scss";

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function Page() {
    return <ClientOnly />;
}