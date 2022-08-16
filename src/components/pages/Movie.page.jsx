import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieHero from "../MovieHero/MovieHero.component";
import MovieNavbar from "../Navbar/movieNavbar.component";
import { FaCcVisa, FaApplePay } from "react-icons/fa";
import Cast from "../Cast/Cast.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";

// component
import { MovieContext } from "../../context/movie.context";

// config
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, []);

  const Settings = {
    Infinity: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <MovieNavbar />
      <MovieHero />

      <div className="my-12 container lg:ml-20 lg:w-2/3 px-4">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Laal Singh Chaddha, starring Aamir Khan & Kareena Kapoor is a story
            set in India that unfolds through several historical events as a
            beautiful journey of love, adventure, hope and wonder
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md ">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RUPay Cards* on BOOkMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md ">
              <div className="w-8 h-8">
                <FaApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get 75* off on 3 movies you buy/rent on Stream.Buy Filmy Pass
                  @Rs.99 Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
          <h2 className="text-gray-900 font-bold text-2xl mb-4">Cast</h2>
          <div className="flex flex-wrap gap-4">
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aamir-khan-42-20-12-2017-04-51-55.jpg"
              castName="Amir khan"
              role="as lal singh"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kareena-kapoor-khan-1151-26-07-2018-11-14-31.jpg"
              castName="Kareena Kapoor"
              role="as Rupa"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naga-chaitanya-akkineni-13567-1655789028.jpg"
              castName="Chaitanya Akkineni"
              role="as Bala"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mona-singh-21056-24-03-2017-12-41-22.jpg"
              castName="Mona Singh"
              role="as Chaddha mother"
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div>
          <h2 className="text-gray-900 font-bold text-2xl mb-4">Crew</h2>
          <div className="flex flex-wrap gap-4">
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/advait-chandan-1076566-18-08-2017-17-07-29.jpg"
              castName="Advait Chandan"
              role="Director"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kiran-rao-20247-24-03-2017-12-31-15.jpg"
              castName="Kiran Rao"
              role="Producer"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aamir-khan-42-20-12-2017-04-51-55.jpg"
              castName="Amir khan"
              role="Producer"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pritam-chakraborty-1731-24-03-2017-17-41-56.jpg"
              castName="Pritam Chakraborty"
              role="Musician"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bhattacharya-1089377-09-10-2020-04-30-42.jpg"
              castName="Amitabh Bhattacharya"
              role="Lyricist"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/atul-kulkarni-261-21-09-2017-11-24-17.jpg"
              castName="Atul Kulkarni"
              role="ScreenPlay"
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={Settings}
            images={TempPosters}
            title="You Might Like"
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={Settings}
            images={TempPosters}
            title="BMX Exlusive"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};
export default Movie;
