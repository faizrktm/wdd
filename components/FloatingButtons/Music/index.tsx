import { useEffect, useRef, useState } from "react";
import CircleButton from "@/components/Button/Circle";

export default function DigitalEnvelope() {
  const player = useRef(null);
  const [paused, setPaused] = useState<boolean>(false);

  const stop = () => {
    try {
      if(player) {
        if(player.current.paused){
          player.current.play();
          setPaused(false);
        } else {
          player.current.pause();
          setPaused(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const play = () => {
      player.current.play();
    }
    if(player.current){
      player.current.addEventListener('canplay', play);
    }
    return () => {
      if(player.current){
        player.current.removeEventListener('canplay', play);
      }
    }
  }, []);

  return (
    <>
      <CircleButton className={`w-[50px] h-[50px] ${paused ? 'bg-wind' : 'bg-blackish'}`} text={<img alt="digital envelope" src="/images/quaver.svg" width={26} height={26} />} onClick={() => stop()} />
      <audio ref={player} className="hidden" preload="auto">
        <source src="/images/music.ogg" type="audio/ogg" />
        <source src="/images/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
