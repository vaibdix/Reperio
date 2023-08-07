import React, { useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';


function Banner() {
  const slides = [
    {
    url: 'https://res.cloudinary.com/dmb1gz8ub/image/upload/v1678557538/b5_jh6tzj.png',
    },
    {
      url: 'https://res.cloudinary.com/dmb1gz8ub/image/upload/v1678557536/b1_fwfvg2.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dmb1gz8ub/image/upload/v1678557536/b3_clrbel.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dmb1gz8ub/image/upload/v1678557536/b2_cj9nio.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dmb1gz8ub/image/upload/v1678557538/b4_zaw8fj.png',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-0 px-4 mt-3 relative group mb-5'>
      <div 
		style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
		className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
		</div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-white text-orange-500 text-bold cursor-pointer'>
        <MdArrowBackIos onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-white text-orange-500 text-bold cursor-pointer'>
        <MdArrowForwardIos onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner