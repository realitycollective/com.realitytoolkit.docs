import { FunctionComponent } from "react";

export interface HeadingTitleProps {
    level: number;
}

const HeadingTitle: FunctionComponent<React.PropsWithChildren<HeadingTitleProps>> = (props) => {
    return (
        <div>
            {props.level === 1 && <h1 className="line-styled-heading mb-8 md:mb-12 text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold uppercase">{props.children}</h1>}
            {props.level === 2 && <h2 className="line-styled-heading mb-8 md:mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold uppercase">{props.children}</h2>}
            {props.level === 3 && <h3 className="line-styled-heading mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold uppercase">{props.children}</h3>}
            {props.level === 4 && <h4 className="line-styled-heading mb-8 md:mb-12 text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold uppercase">{props.children}</h4>}
            {props.level === 5 && <h5 className="line-styled-heading mb-8 md:mb-12 text-1xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase">{props.children}</h5>}
            {props.level === 6 && <h6 className="line-styled-heading mb-8 md:mb-12 text-1xl md:text-2xl lg:text-2xl xl:text-2xl">{props.children}</h6>}
        </div>
    );
}

export default HeadingTitle;