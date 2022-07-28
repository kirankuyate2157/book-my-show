import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
//components
import Poster from "../Poster/Poster.component";

const Premier = () => {
  const settings = {
    Infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const PremierImages = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00310790-fzwabxfqqx-portrait.jpg",
      alt: "zack",
      title: "Spider-Man No Way Home",
      subtitle: "Hindi",
    },
    {
      src: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-duke-et00332541-1658928021.jpg",
      alt: "zack",
      title: "The Duke",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/rrr-stream-in-hindi-et00328297-03-06-2022-03-15-08.jpg",
      alt: "zack",
      title: "RRR",
      subtitle: "Hindi",
    },
    {
      src: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/gangubai-kathiawadi-stream-in-telugu-et00332807-1657708030.jpg",
      alt: "zack",
      title: "Gangubai Kathiawadi",
      subtitle: "Telugu",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00332201-zfbjtdhkqr-portrait.jpg",
      alt: "zack",
      title: "My Son",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00327814-ufjjjdtfqk-portrait.jpg",
      alt: "zack",
      title: "American Refugee",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00333979-ytvmnbvqxd-portrait.jpg",
      alt: "zack",
      title: "The Good Neighbor",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20:q-80/et00326718-eumlskvfpy-portrait.jpg",
      alt: "zack",
      title: "The Batman",
      subtitle: "English",
    },
  ];

  return (
    <>
      <div flex className=" flex items-center justify-between">
        <div className=" flex flex-col items-start">
          <div>
            <h3 className=" text-white font-bold text-xl">Premiers</h3>

            <p className=" text-white  text-sm">
              Brand new release every friday
            </p>
          </div>
        </div>
        <span className="flex text-red-500 items-center text-xs gap-1 cursor-pointer ">
          See All
          <BiChevronRight />
        </span>
      </div>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
