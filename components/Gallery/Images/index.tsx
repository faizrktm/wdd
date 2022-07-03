import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useShowModal from '@/components/Modal/hooks/useShowModal';
import { images } from './images';

function ImagesModal({ selectedItem }: { selectedItem: number }){
  return (
    <Carousel showArrows={false} className="w-full h-[60vh]" showIndicators showStatus={false} infiniteLoop selectedItem={selectedItem || 0}>
      {images.map((item, index) => (
        <div key={index} style={{ width: '100%', height: '60vh' }}>
          <Image src={item.src} layout="fill" objectFit="contain" />
        </div>
      ))}
    </Carousel>
  )
}

export default function Images() {
  const showModal = useShowModal();

  const showModalSimpler = (index: number) => {
    showModal(<ImagesModal selectedItem={index} />, '', true)
  };

  return (
    <Carousel showArrows={false} className="w-full h-[400px] md:w-[50%]" showIndicators={false} showStatus={false} autoPlay infiniteLoop>
      {images.map((item, index) => (
        <button type="button" key={item.src} style={{ width: '100%', height: '400px' }} onClick={() => showModalSimpler(index)}>
          <Image src={item.src} layout="fill" objectFit='cover' />
        </button>
      ))}
    </Carousel>
  )
}
