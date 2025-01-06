import { FunctionComponent } from "react"
import { ClassNameProps } from "../components.model";

export interface ButtonProps extends ClassNameProps {
    external?: boolean;
    to: string;
}

const Button: FunctionComponent<React.PropsWithChildren<ButtonProps>> = ({
    external = false,
    to,
    children,
    className
}) => {
    return (
        <div>
            {external &&
                <a href={to} target="_blank" className={`rounded-md drop-shadow-md md:transition-all md:duration-300 md:hover:scale-105 p-4 flex flex-col items-center justify-center bg-white text-accent-primary text-1xl font-bold uppercase ${className}`}>
                    {children}
                </a>}
            {!external &&
                <a href={to} className={`rounded-md drop-shadow-md md:transition-all md:duration-300 md:hover:scale-105 p-4 flex flex-col items-center justify-center bg-white text-accent-primary text-1xl font-bold uppercase ${className}`}>
                    {children}
                </a>}
        </div>
    );
}

export default Button;