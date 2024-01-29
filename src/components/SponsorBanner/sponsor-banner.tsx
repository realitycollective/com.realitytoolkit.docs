import React, { FunctionComponent } from "react";
import styles from './sponsor-banner.module.css';
import codeEffectLogo from './logo-codeeffect.svg';

const SponsorBanner: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <img src='./logo-codeeffect.svg' title="CodeEffect" alt="CodeEffect" />
            Enterprise VR and AR consulting and development
        </div>
    );
};

export default SponsorBanner;