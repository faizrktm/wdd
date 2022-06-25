import { useRef, useState } from "react";
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

  return (
    <>
      <CircleButton className={`w-[50px] h-[50px] ${paused ? 'bg-wind' : 'bg-blackish'}`} text={<img alt="digital envelope" src="/images/quaver.svg" width={26} height={26} />} onClick={() => stop()} />
      <audio autoPlay ref={player} className="hidden">
        <source src="/images/music.ogg" type="audio/ogg" />
        <source src="/images/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
