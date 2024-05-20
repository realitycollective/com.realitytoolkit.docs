import React, { FunctionComponent } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";
import Title from "../typography/title";

export interface OrganizationCardProps extends ClassNameProps {
    name: string;
    description: string;
    logoSrc: string;
    url: string;
}

const OrganizationCard: FunctionComponent<OrganizationCardProps> = (props) => {
    return (
        <a target="_blank" className={`text-inherit hover:no-underline drop-shadow-md ${props.className}`} href={props.url}>
            <div className={`bg-[#242526] flex flex-col rounded-lg overflow-hidden`}>
                <img className="w-full object-cover block" src={props.logoSrc} alt={props.name} />

                <div className="p-4 grow">
                    <Title level={5} compact>{props.name}</Title>
                    <Text>{props.description}</Text>
                </div>
            </div>
        </a>
    );
};

export default OrganizationCard;