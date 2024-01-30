import React, { FunctionComponent } from "react";
import styles from './hero-section.module.css';
import HeadingTitle from "../typo/heading-title";
import Paragraph from "../typo/paragraph";
import keyVisualSrc from './key-visual.jpg';
import logoSrc from './logo-toolkit.png';
import Button from "../layout/button";

const HeroSection: FunctionComponent = () => {
    return (
        <div className="h-screen relative overflow-hidden -mt-[60px]">
            <img className="absolute h-full w-full object-cover" src={keyVisualSrc} />
            <div className={`absolute w-full h-full ${styles.overlay}`}></div>

            <div className="absolute w-full h-full flex flex-col justify-center items-center p-8">
                <div>
                    <img className="w-32 mb-16 drop-shadow-xl" src={logoSrc} />
                </div>
                <div className="max-w-4xl text-center">
                    <HeadingTitle level={2}>XR development made easy</HeadingTitle>
                    <Paragraph>Reality Toolkit, a comprehensive, open-source, and free framework designed to expedite and enhance XR app and game development within the Unity ecosystem.</Paragraph>
                </div>
                <div className="flex gap-8">
                    <Button to="/docs/get-started">Get Started</Button>
                </div>
                <div className="flex gap-4 mt-8 md:gap-8">
                    <a href="https://github.com/realitycollective/com.realitytoolkit.core" target="_blank">GitHub</a>
                    <a href="https://openupm.com/packages/com.realitytoolkit.core/" target="_blank">OpenUPM</a>
                    <a href="https://github.com/realitycollective/com.realitytoolkit.core/blob/main/LICENSE.md">License</a>
                    <a href="https://discord.gg/YjHAQD2XT8">Discord</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;