import React from "react";
// component
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
// import Premier from "../Premier/Premier.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className=" flex flex-col gap-10">
        <div className="container mx-auto">
          <div className="  hidden sm:flex py-10 ">
            <div>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"
                alt="Stream"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold my-3 text-gray-800">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-snav-800 pb-5">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="  hidden sm:flex ">
              <div>
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                  alt="premiere"
                />
              </div>
            </div>
            <PosterSlider
              images={TempPosters}
              title="Premieres"
              subtitle="Brand new  releases every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col gap-3 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-3 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-3 my-8">
        <PosterSlider
          images={TempPosters}
          title="Outdoor events"
          isDark={false}
        />
      </div>
    </>
  );
};
export default HomePage;
