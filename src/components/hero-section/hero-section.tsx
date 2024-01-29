import React, { FunctionComponent } from "react";
import styles from './hero-section.module.css';
import HeadingTitle from "../typo/heading-title";
import Paragraph from "../typo/paragraph";
import keyVisualSrc from './key-visual.jpg';
import Button from "../layout/button";

const HeroSection: FunctionComponent = () => {
    return (
        <div className="h-screen relative overflow-hidden">
            <img className="absolute h-full w-full object-cover" src={keyVisualSrc} />
            <div className={`absolute w-full h-full ${styles.overlay}`}></div>

            <div className="absolute w-full h-full flex flex-col justify-center items-center p-8">
                <div className="max-w-4xl text-center">
                    <HeadingTitle level={2}>XR development made easy</HeadingTitle>
                    <Paragraph>Reality Toolkit, a comprehensive framework meticulously designed to expedite and enhance XR application and game development within the Unity ecosystem.</Paragraph>
                </div>
                <div>
                    <Button to="/docs/get-started">Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;