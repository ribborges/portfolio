interface StackCardProps {
    image: string,
    alt: string,
    name: string,
}

export default function StackCard(props: StackCardProps) {
    return (
        <div className="
            flex gap-2 items-center
            bg-zinc-800 bg-opacity-70
            border border-solid border-zinc-100 border-opacity-10
            rounded-xl
            p-3
            hover:shadow-2xl hover:shadow-zinc-200/20
            hover:scale-105
            transition duration-500
        ">
            <img className="w-6 text-md" src={ props.image } alt={props.alt} />
            <p>{ props.name }</p>
        </div>
    );
}