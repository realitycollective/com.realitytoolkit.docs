import { FunctionComponent } from "react";

export interface YouTubeVideoProps {
    embedId: string;
    title: string;
}

const YouTubeVideo: FunctionComponent<YouTubeVideoProps> = (props) => (
    <div className="flex justify-center align-center py-2 md:py-4">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={props.title}
        />
    </div>
);

export default YouTubeVideo;