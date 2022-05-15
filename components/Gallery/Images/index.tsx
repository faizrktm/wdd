import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  '/images/prewed/Noisess123.jpg',
  '/images/prewed/Noisess126.jpg',
  '/images/prewed/Noisess163.jpg',
]

export default function Images() {
  return (
    <Carousel showArrows={false} className="w-full h-[400px]" showIndicators={false} showStatus={false} autoPlay infiniteLoop>
      {images.map((item) => (
        <div key={item} style={{ width: '100%', height: '400px' }}>
          <Image src={item} layout="fill" objectFit='cover' />
        </div>
      ))}
    </Carousel>
  )
}
