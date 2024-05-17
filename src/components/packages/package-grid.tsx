import React, { FunctionComponent } from "react";
import PackageGridItem from "./package-grid-item";
import Title from "../typography/title";

const stablePackages = [
    {
        packageName: 'RealityToolkit.Core',
        packageIdentifier: 'com.realitytoolkit.core'
    },
    {
        packageName: 'RealityToolkit.Player',
        packageIdentifier: 'com.realitytoolkit.player'
    },
    {
        packageName: 'RealityToolkit.Locomotion',
        packageIdentifier: 'com.realitytoolkit.locomotion'
    },
    {
        packageName: 'RealityToolkit.MetaPlatform',
        packageIdentifier: 'com.realitytoolkit.metaplatform'
    },
    {
        packageName: 'RealityToolkit.Pico',
        packageIdentifier: 'com.realitytoolkit.pico'
    }
];

const inDevelopmentPackages = [
    {
        packageName: 'RealityToolkit.OpenXR',
        packageIdentifier: 'com.realitytoolkit.openxr'
    },
    {
        packageName: 'RealityToolkit.DeviceSimulation',
        packageIdentifier: 'com.realitytoolkit.devicesimulation'
    },
    {
        packageName: 'RealityToolkit.DeveloperTools',
        packageIdentifier: 'com.realitytoolkit.devtools'
    },
    {
        packageName: 'RealityToolkit.Boundary',
        packageIdentifier: 'com.realitytoolkit.boundary'
    },
    {
        packageName: 'RealityToolkit.SpatialAwareness',
        packageIdentifier: 'com.realitytoolkit.spatial-awareness'
    },
    {
        packageName: 'RealityToolkit.SpatialPersistence',
        packageIdentifier: 'com.realitytoolkit.spatial-persistence'
    },
    {
        packageName: 'RealityToolkit.Samples',
        packageIdentifier: 'com.realitytoolkit.samples'
    }
];

const PackageGrid: FunctionComponent = () => {
    const itemsPerRow = 3;

    const buildStablePackagesGroups = () => {
        const groups = [];

        for (let i = 0; i < stablePackages.length; i += itemsPerRow) {
            const group = stablePackages.slice(i, i + itemsPerRow);
            groups.push(group);
        }

        return groups;
    };

    const buildInDevelopmentPackagesGroups = () => {
        const groups = [];

        for (let i = 0; i < inDevelopmentPackages.length; i += itemsPerRow) {
            const group = inDevelopmentPackages.slice(i, i + itemsPerRow);
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
                                {item !== null && <PackageGridItem className="basis-1/3" packageName={item.packageName} packageIdentifier={item.packageIdentifier} />}
                            </div>)}
                    </div>)}
            </div>

            <Title className="mt-10" level={3}>In Development</Title>

            <div>
                {buildInDevelopmentPackagesGroups().map((group, groupIndex) =>
                    <div key={groupIndex} className="grid md:grid-cols-3 gap-8 mt-8">
                        {group.map((item, index) =>
                            <div key={index}>
                                {item !== null && <PackageGridItem className="basis-1/3" packageName={item.packageName} packageIdentifier={item.packageIdentifier} />}
                            </div>)}
                    </div>)}
            </div>
        </div>
    );
};

export default PackageGrid;