import React, { FunctionComponent } from "react";
import Text from "../typography/text";

export interface PackageGridItemProps {
    packageName: string;
    packageIdentifier: string;
}

const PackageGridItem: FunctionComponent<PackageGridItemProps> = (props) => {
    return (
        <a target="_blank" className="text-inherit hover:no-underline drop-shadow-md md:transition-all md:duration-300 md:hover:scale-105" href={`https://github.com/realitycollective/${props.packageIdentifier}`}>
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