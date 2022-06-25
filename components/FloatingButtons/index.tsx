import DigitalEnvelope from "./DigitalEnvelope";
import Music from "./Music";

export default function FloatingButtons(){
  return (
    <div className="fixed top-3 right-3 grid gap-4 grid-cols-1 grid-rows-2 place-items-end">
      <Music />
      <DigitalEnvelope />
    </div>
  )
}
