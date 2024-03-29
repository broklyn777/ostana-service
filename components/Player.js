import ReactPlayer from "react-player";

const Player = ({ url }) => {
    return (
        <div className="relative  pt-[56.25%]">
            <ReactPlayer
                className="absolute top-0 left-0"
                url={url}
                width="100%"
                height="100%"
                loop={true}
                controls={false}
                muted={true}
                playing={false}


            />
        </div>
    );
};
export default Player;
