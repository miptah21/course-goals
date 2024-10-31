import { type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{image: {src: string, alt: string}}>;
// type HeaderProps = {
//     image: {
//         src: string;
//         alt: string;
//     }
//     children: React.ReactNode;
// }

export default function Header({image, children}: HeaderProps) {
    return (
        <header>
            <img {...image} /> 
            <h1>{children}</h1>
        </header>
    );
}

