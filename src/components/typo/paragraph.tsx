import { FunctionComponent } from "react";

const Paragraph: FunctionComponent<React.PropsWithChildren> = (props) => {
    return (
        <p className="line-styled-heading mb-8 md:mb-12 text-1xl md:text-1xl lg:text-2xl xl:text-2xl">{props.children}</p>
    );
}

export default Paragraph;