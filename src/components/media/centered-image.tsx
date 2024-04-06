import { FunctionComponent } from "react";

export interface CenteredImageProps {
    alt: string;
    src: string;
}

const CenteredImage: FunctionComponent<CenteredImageProps> = (props) => (
    <span style={{
        textAlign: 'center'
    }}>
        <img src={props.src} alt={props.alt} />
    </span>
);

export default CenteredImage;