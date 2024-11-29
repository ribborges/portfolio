'use client';

import classConcat from '../../utils/classConcat';

interface SeparatorProps {
    height?: number;
}

function Spacer({ height = 120 }: SeparatorProps) {
    return <hr className={
        classConcat(
            `mt-[${height / 2}px] mb-[${height / 2}px]`,
            "border-t-1 border-solid border-zinc-300",
        )
    } />;
}

function Blanckspace({ height = 60 }: SeparatorProps) {
    return <hr className={
        classConcat(
            `h-[${height}px]`,
            "border-none",
        )
    } />;
}

export { Spacer, Blanckspace };