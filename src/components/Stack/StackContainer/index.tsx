import { ReactNode } from "react";

interface stackContainerProps {
    title: ReactNode,
    children?: ReactNode,
}

export default function StackContainer(props: stackContainerProps) {
    return (
        <div className="
            flex flex-col gap-4
            mt-6 mb-6
        ">
            <h3>{props.title}</h3>
            <>
                <style>{`
                    @media (max-width: 767px) {
                        .mobile-scroll {
                            overflow: auto;
                            -webkit-overflow-scrolling: touch;
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    }
                    @media (min-width: 768px) {
                        .mobile-scroll {
                            overflow: visible;
                        }
                    }
                `}</style>

                <div
                    className="flex md:flex-wrap gap-4 mobile-scroll"
                >
                    {props.children}
                </div>
            </>
        </div>
    );
}