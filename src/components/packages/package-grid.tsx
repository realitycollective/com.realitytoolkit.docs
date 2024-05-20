import React, { FunctionComponent, useState } from "react";
import PackageGridItem, { PackageGridItemProps } from "./package-grid-item";
import Title from "../typography/title";
import Text from "../typography/text";

interface PackageGridData {
    stable: PackageGridItemProps[];
    inDevelopment: PackageGridItemProps[];
}

const PackageGrid: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<PackageGridData | null>(null);
    const itemsPerRow = 3;

    if (isLoading) {
        fetch('https://raw.githubusercontent.com/realitycollective/realitycollective.logo/main/RealityToolkit/RepoBanners/data.json')
            .then((response) => response.json())
            .then((data) => {
                setData(() => data);
                setIsLoading(() => false);
            });

        return (
            <div>
                <Text>Loading...</Text>
            </div>
        );
    }
    else {
        const buildStablePackagesGroups = () => {
            const groups = [];

            for (let i = 0; i < data.stable.length; i += itemsPerRow) {
                const group = data.stable.slice(i, i + itemsPerRow);
                groups.push(group);
            }

            return groups;
        };

        const buildInDevelopmentPackagesGroups = () => {
            const groups = [];

            for (let i = 0; i < data.inDevelopment.length; i += itemsPerRow) {
                const group = data.inDevelopment.slice(i, i + itemsPerRow);
                groups.push(group);
            }

            return groups;
        };

        return (
            <div>
                <Title level={3}>Stable</Title>

                <div>
                    {buildStablePackagesGroups().map((group, groupIndex) =>
                        <div key={groupIndex} className="grid md:grid-cols-3 gap-8 mt-8">
                            {group.map((item, index) =>
                                <div key={index}>
                                    {item !== null && <PackageGridItem className="basis-1/3" {...item} />}
                                </div>)}
                        </div>)}
                </div>

                <Title className="mt-10" level={3}>In Development</Title>

                <div>
                    {buildInDevelopmentPackagesGroups().map((group, groupIndex) =>
                        <div key={groupIndex} className="grid md:grid-cols-3 gap-8 mt-8">
                            {group.map((item, index) =>
                                <div key={index}>
                                    {item !== null && <PackageGridItem className="basis-1/3" {...item} />}
                                </div>)}
                        </div>)}
                </div>
            </div>
        );
    }
};

export default PackageGrid;