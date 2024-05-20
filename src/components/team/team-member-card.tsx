import React, { FunctionComponent } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";
import Title from "../typography/title";

export interface TeamMemberCardProps extends ClassNameProps {
    name: string;
    description: string;
    imageSrc: string
    gitHubProfile: string;
    xProfile: string;
}

const TeamMemberCard: FunctionComponent<TeamMemberCardProps> = (props) => {
    return (
        <div className={`bg-[#242526] flex flex-col rounded-lg overflow-hidden text-inherit hover:no-underline drop-shadow-md md:transition-all md:duration-300 ${props.className}`}>
            <div className="flex justify-center p-8">
                <img className="object-cover block rounded-full w-60 h-60" src={props.imageSrc} alt={props.name} />
            </div>

            <div className="p-4 grow">
                <Title level={4} compact>{props.name}</Title>
                <Text>{props.description}</Text>
            </div>

            <div className="p-4 flex gap-8">
                <Text><a href={props.gitHubProfile} title="GitHub Profile">GitHub</a></Text>
                <Text><a href={props.xProfile} title="X Profile">X</a></Text>
            </div>
        </div>
    );
};

export default TeamMemberCard;