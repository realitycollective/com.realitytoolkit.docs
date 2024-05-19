import React, { FunctionComponent } from "react";
import Text from "../typography/text";
import { ClassNameProps } from "../components.model";

export interface PackageGridItemProps extends ClassNameProps {
    packageName: string;
    packageIdentifier: string;
}

const PackageGridItem: FunctionComponent<PackageGridItemProps> = (props) => {
    return (
        <a target="_blank" className={`text-inherit drop-shadow-md ${props.className}`} href={`https://github.com/realitycollective/${props.packageIdentifier}`}>
            <div className="bg-[#242526] rounded-lg overflow-hidden">
                <div className="relative bg-white">
                    <img className="object-cover block" src={`https://github.com/realitycollective/realitycollective.logo/raw/main/RealityToolkit/RepoBanners/${props.packageIdentifier}.png?raw=true`} alt={props.packageName} />
                </div>

                <div className="p-4">
                    <Text compact>{props.packageName}</Text>
                </div>
            </div>
        </a>
    );
};

export default PackageGridItem;