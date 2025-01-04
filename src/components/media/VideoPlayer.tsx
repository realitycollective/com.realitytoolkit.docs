import { FunctionComponent } from "react";

export type VideoPlayerAlignment = 'left' | 'center' | 'right';

export interface VideoPlayerProps {
    src: string;
    mimeType?: string;
    autoPlay?: boolean;
    playsInline?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    alignment?: VideoPlayerAlignment;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({
    src,
    mimeType = 'video/webm',
    autoPlay = false,
    playsInline = false,
    muted = false,
    loop = false,
    controls = true,
    alignment = 'center'
}) => {
    const flexJustify = alignment === 'left' ? 'justify-start' :
        (alignment === 'center' ? 'justify-center' : 'justify-end');

    return (
        <div className={`w-full flex ${flexJustify} align-center`}>
            <div className='relative h-52 w-52'>
                <video className="absolute h-full w-full left-0 top-0 object-cover" autoPlay={autoPlay} playsInline={playsInline} muted={muted} loop={loop} controls={controls}>
                    <source src={src} type={mimeType} />
                </video>
            </div>
        </div>
    );
};

export default VideoPlayer;