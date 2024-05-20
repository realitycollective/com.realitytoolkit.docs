import React, { FunctionComponent, useState } from "react";
import ShowcaseGridItem, { ShowcaseGridItemProps } from "./showcase-grid-item";
import Text from "../typography/text";

const ShowcaseGrid: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<ShowcaseGridItemProps[] | null>(null);
    const itemsPerRow = 3;

    if (isLoading) {
        fetch('https://raw.githubusercontent.com/realitycollective/realitycollective.logo/main/RealityToolkit/Showcase/data.json')
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
        const buildGroups = () => {
            const groups = [];

            for (let i = 0; i < data.length; i += itemsPerRow) {
                const group = data.slice(i, i + itemsPerRow);
                groups.push(group);
            }

            return groups;
        };

        return (
            <div>
                {buildGroups().map((group, groupIndex) =>
                    <div key={groupIndex} className="grid md:grid-cols-3 gap-8 mt-8">
                        {group.map((item, index) =>
                            <div key={index}>
                                {item !== null && <ShowcaseGridItem className="basis-1/3" {...item} />}
                            </div>)}
                    </div>)}
            </div>
        );
    }
};

export default ShowcaseGrid;