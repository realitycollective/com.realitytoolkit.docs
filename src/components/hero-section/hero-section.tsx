import React, { FunctionComponent } from "react";
import styles from './hero-section.module.css';
import Title from "../typography/title";
import Text from "../typography/text";
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
                <div className="max-w-4xl text-center mb-8">
                    <Title level={2}>XR development made easy</Title>
                    <Text>Reality Toolkit, a comprehensive, open-source, and free framework designed to expedite and enhance XR app and game development within the Unity ecosystem.</Text>
                </div>
                <div className="flex gap-8">
                    <Button to="/docs/get-started">Get Started</Button>
                    <Button className="bg-[#5865F2] text-white hover:text-white" external to="https://discord.gg/YjHAQD2XT8">Join Discord</Button>
                </div>
                <div className="flex gap-4 mt-8 md:gap-8">
                    <a href="https://github.com/realitycollective/com.realitytoolkit.core" target="_blank">GitHub</a>
                    <a href="https://openupm.com/packages/com.realitytoolkit.core/" target="_blank">OpenUPM</a>
                    <a href="https://github.com/realitycollective/com.realitytoolkit.core/blob/main/LICENSE.md">License</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;