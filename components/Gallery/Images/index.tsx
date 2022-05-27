import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useShowModal from '@/components/Modal/hooks/useShowModal';

const images = [
  '/images/prewed/Noisess123.jpg',
  '/images/prewed/Noisess126.jpg',
  '/images/prewed/Noisess163.jpg',
]

function ImagesModal(){
  return (
    <Carousel showArrows={false} className="w-full h-[60vh]" showIndicators showStatus={false} infiniteLoop>
      {images.map((item, index) => (
        <div key={index} style={{ width: '100%', height: '60vh' }}>
          <Image src={item} layout="fill" objectFit="cover" />
        </div>
      ))}
    </Carousel>
  )
}

export default function Images() {
  const showModal = useShowModal();

  const showModalSimpler = () => {
    showModal(<ImagesModal />, '', true)
  };

  return (
    <Carousel showArrows={false} className="w-full h-[400px]" showIndicators={false} showStatus={false} autoPlay infiniteLoop>
      {images.map((item) => (
        <button type="button" key={item} style={{ width: '100%', height: '400px' }} onClick={showModalSimpler}>
          <Image src={item} layout="fill" objectFit='cover' />
        </button>
      ))}
    </Carousel>
  )
}
