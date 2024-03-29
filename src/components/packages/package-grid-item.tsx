import React, { FunctionComponent } from "react";
import Paragraph from "../typo/paragraph";

export interface PackageGridItemProps {
    packageName: string;
    packageIdentifier: string;
}

const PackageGridItem: FunctionComponent<PackageGridItemProps> = (props) => {
    return (
        <div className="bg-[#242526] rounded-lg overflow-hidden">
            <div className="relative bg-white">
                <img className="object-cover" src={`https://github.com/realitycollective/realitycollective.logo/raw/main/RealityToolkit/RepoBanners/${props.packageIdentifier}.png?raw=true`} alt="Core" />
            </div>

            <div>
                <Paragraph>{props.packageName}</Paragraph>
                <span>{props.packageIdentifier}</span>
            </div>
        </div>
    );
};

export default PackageGridItem;