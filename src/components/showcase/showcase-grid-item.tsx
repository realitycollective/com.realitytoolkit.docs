import React, { FunctionComponent } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

export interface ShowcaseGridItemProps extends ClassNameProps {
    title: string;
    imageSrc: string;
    url: string;
}

const ShowcaseGridItem: FunctionComponent<ShowcaseGridItemProps> = (props) => {
    return (
        <a target="_blank" className={`text-inherit hover:no-underline drop-shadow-md md:transition-all md:duration-300 ${props.className}`} href={props.url}>
            <div className="bg-[#242526] rounded-lg overflow-hidden">
                <div className="relative bg-white">
                    <img className="object-cover block" src={props.imageSrc} alt={props.title} />
                </div>

                <div className="p-4">
                    <Text compact>{props.title}</Text>
                </div>
            </div>
        </a>
    );
};

export default ShowcaseGridItem;