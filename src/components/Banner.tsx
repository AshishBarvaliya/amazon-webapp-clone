import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bannerImages = [
  {
    src: '/banner 1.jpg',
    alt: 'banner-1',
  },
  {
    src: '/banner 2.jpg',
    alt: 'banner-2',
  },
  {
    src: '/banner 3.jpg',
    alt: 'banner-3',
  },
];

const Banner: FC = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {bannerImages.map(({ src, alt }) => (
          <div key={alt}>
            <img loading="lazy" src={src} alt={alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;