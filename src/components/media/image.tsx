import { FunctionComponent } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface ImageProps {
    alt: string;
    src: string;
}

const Image: FunctionComponent<ImageProps> = (props) => (
    <figure className="flex flex-col">
        <img className="block" src={useBaseUrl(props.src)} alt={props.alt} />
        <figcaption className="bg-gray-800 p-4 text-sm">{props.alt}</figcaption>
    </figure>
);

export default Image;