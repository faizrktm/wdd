import Hero from '@/components/Hero';
import Couple from '@/components/Couple';
import SaveDate from '@/components/SaveDate';
import Location from '@/components/Location';
import ThankYou from '@/components/ThankYou';
import HealthProtocol from '@/components/HealthProtocol';
import Wish from '@/components/Wish';
import FloatingButtons from '@/components/FloatingButtons';
import Meta from '@/components/Meta';
import { useGuest } from '@/contexts/Guest';


export default function Second(){
  const {guest} = useGuest();
  return (
    <>
      <Meta guest={guest} />
      <Hero />
      <Couple />
      <SaveDate />
      <Location />
      <ThankYou />
      <HealthProtocol />
      <Wish guest={guest} />
      <FloatingButtons />
    </>
  )
}
