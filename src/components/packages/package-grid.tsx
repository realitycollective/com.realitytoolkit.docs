import React, { FunctionComponent } from "react";
import PackageGridItem from "./package-grid-item";

const PackageGrid: FunctionComponent = () => {
    return (
        <div className="flex gap-8 flex-col md:flex-row">
            <PackageGridItem packageName="RealityToolkit.Core" packageIdentifier="com.realitytoolkit.core" />
            <PackageGridItem packageName="RealityToolkit.Player" packageIdentifier="com.realitytoolkit.player" />
            <PackageGridItem packageName="RealityToolkit.Locomotion" packageIdentifier="com.realitytoolkit.locomotion" />
            <PackageGridItem packageName="RealityToolkit.MetaPlatform" packageIdentifier="com.realitytoolkit.metaplatform" />
            <PackageGridItem packageName="RealityToolkit.Pico" packageIdentifier="com.realitytoolkit.pico" />
        </div>
    );
};

export default PackageGrid;