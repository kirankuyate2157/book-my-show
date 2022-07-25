import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settings = {
    dots: true,
    centerMode: true,
    useTransform: true,
    waitForAnimate: true,
    arrow: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const images = [
    "https://images.unsplash.com/photo-1658503366266-c815d907d551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1658532865456-bd2c7723cc6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1625978827241-c8bdc7cc3ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWNraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRyYWNraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1640184713839-9b87bde3cba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHRyYWNraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1429277005502-eed8e872fe52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWNraW5nJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  ];
  return (
    <>
      <HeroSlider {...settings}>
        {images.map((image) => (
          <div className="w-20 p-1  h-60">
            <img
              src={image}
              alt="testing"
              className="w-full  rounded-md h-full"
            />
          </div>
        ))}
      </HeroSlider>
    </>
  );
};

export default HeroCarousal;
