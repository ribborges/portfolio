interface StackCardProps {
    image: string,
    alt: string,
    name: string,
}

export default function StackCard(props: StackCardProps) {
    return (
        <div className="
            min-w-max
            flex gap-2 items-center
            backdrop-blur-md bg-zinc-200/60 dark:bg-zinc-900/60
            border border-solid rounded-2xl border-zinc-300/60 dark:border-zinc-800/60
            p-3
            hover:shadow-2xl hover:shadow-zinc-950/20 dark:hover:shadow-zinc-200/20
            hover:scale-105
            transition duration-500
        ">
            <img className="w-6 text-md" src={ props.image } alt={props.alt} />
            <p className="text-nowrap">{ props.name }</p>
        </div>
    );
}