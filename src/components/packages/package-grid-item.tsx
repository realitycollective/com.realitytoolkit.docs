import React, { FunctionComponent } from "react";
import { ClassNameProps } from "../components.model";

export interface PackageGridItemProps extends ClassNameProps {
    packageName: string;
    packageIdentifier: string;
}

const PackageGridItem: FunctionComponent<PackageGridItemProps> = (props) => {
    return (
        <a target="_blank" className={`text-inherit drop-shadow-md ${props.className}`} href={`https://github.com/realitycollective/${props.packageIdentifier}`}>
            <div className="relative rounded-lg overflow-hidden">
                <img className="object-cover block" src={`https://github.com/realitycollective/realitycollective.logo/raw/main/RealityToolkit/RepoBanners/${props.packageIdentifier}.png?raw=true`} alt={props.packageName} />
            </div>
        </a>
    );
};

export default PackageGridItem;