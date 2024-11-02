import { hightlightsSlides } from "@/constants";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface HighlightsProps {
  id: number;
  video: URL;
  textLists: string[];
  videoDuration: number;
}

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState<object>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        if (startPlay) {
          videoRef.current[videoId].play();
        }
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;

    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress
      let anime = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((item: HighlightsProps, idx) => (
          <div key={item.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => {
                    if (el) videoRef.current[idx] = el;
                  }}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                >
                  <source src={item.video.toString()} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {item.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
