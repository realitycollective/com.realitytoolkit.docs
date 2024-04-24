import { FunctionComponent } from "react";
import Image, { ImageProps } from "./image";

const CenteredImage: FunctionComponent<ImageProps> = (props) => (
    <span className="flex justify-center py-2 md:py-4">
        <Image {...props} />
    </span>
);

export default CenteredImage;