import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieHero from "../MovieHero/MovieHero.component";
import MovieNavbar from "../Navbar/movieNavbar.component";
import { FaCcVisa, FaApplePay } from "react-icons/fa";
import Cast from "../Cast/Cast.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";
import Slider from "react-slick";

// component
import { MovieContext } from "../../context/movie.context";

const Movie = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const [similarMovie, setSimilarMovie] = useState([]);
  const [recommendedMovie, setRecommendedMovie] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCastData = await axios.get(`/movie/${id}/credits`);
      setCast(getCastData.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestCrew = async () => {
      const getCrewData = await axios.get(`/movie/${id}/credits`);
      setCrew(getCrewData.data.crew);
    };
    requestCrew();
  }, [id]);
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovie(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovie = async () => {
      const getRecommendedMovie = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovie(getRecommendedMovie.data.results);
    };
    requestRecommendedMovie();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

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

  const SettingsCast = {
    Infinity: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
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
          <p>{movie.overview}</p>
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
        {/* Cast information */}
        <div>
          <h2 className="text-gray-900 font-bold text-2xl mb-4">Cast</h2>

          <Slider {...SettingsCast}>
            {cast.map((castData) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                castName={castData.original_name}
                role={`as ${castData.character}`}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* Crew information */}
        <div>
          <h2 className="text-gray-900 font-bold text-2xl mb-4">Crew</h2>

          <Slider {...SettingsCast}>
            {crew.map((crewData) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original${crewData.profile_path}`}
                castName={crewData.original_name}
                role={crewData.job}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={Settings}
            images={similarMovie}
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
            images={recommendedMovie}
            title="BMX Exlusive"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};
export default Movie;
