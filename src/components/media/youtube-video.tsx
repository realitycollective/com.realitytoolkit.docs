import { FunctionComponent } from "react";

export interface YouTubeVideoProps {
    embedId: string;
}

const YouTubeVideo: FunctionComponent<YouTubeVideoProps> = (props) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

export default YouTubeVideo;