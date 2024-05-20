import React, { FunctionComponent } from "react";
import Title from "../typography/title";
import { ClassNameProps } from "../components.model";

export interface ShowcaseGridItemProps extends ClassNameProps {
    title: string;
    imageSrc: string;
    url: string;
}

const ShowcaseGridItem: FunctionComponent<ShowcaseGridItemProps> = (props) => {
    return (
        <a target="_blank" className={`text-inherit hover:no-underline drop-shadow-md ${props.className}`} href={props.url}>
            <div className="bg-[#242526] rounded-lg overflow-hidden">
                <img className="w-full object-cover block" src={props.imageSrc} alt={props.title} />

                <div className="p-4">
                    <Title compact level={5}>{props.title}</Title>
                </div>
            </div>
        </a>
    );
};

export default ShowcaseGridItem;