import React from "react";
import PlaysFilter from "../PlaysFilters/PlaysFilters.component";

//components

import Poster from "../Poster/Poster.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-6 ">
        <div className="w-full lg:flex lg:flex-row-reverse lg:gap-4">
          <div className="lg:w-3/4 ">
            <h2 className="text-2xl font-bold mb-4">Plays in Nashik</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-nndmbbdwem-portrait.jpg"
                  title="Sarkha Kahitri Hotay"
                  subtitle="Marathi ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-nndmbbdwem-portrait.jpg"
                  title="Sarkha Kahitri Hotay"
                  subtitle="Marathi ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-nndmbbdwem-portrait.jpg"
                  title="Sarkha Kahitri Hotay"
                  subtitle="Marathi ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-nndmbbdwem-portrait.jpg"
                  title="Sarkha Kahitri Hotay"
                  subtitle="Marathi ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/4 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-nndmbbdwem-portrait.jpg"
                  title="Sarkha Kahitri Hotay"
                  subtitle="Marathi ₹400"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="px-1">
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Marathi", "Hindi", "English"]}
              />
              <PlaysFilter title="Categories" tags={["theatre"]} />
              <PlaysFilter
                title="Genres"
                tags={[
                  "Drama",
                  "Comedy",
                  "Romantic",
                  "Thriller",
                  "Musical",
                  "Mythological",
                  "Suspense",
                ]}
              />
              <PlaysFilter
                title="More Filters"
                tags={["Outdoor Events", "Online Streaming", "Kids Allowed"]}
              />
              <PlaysFilter
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Plays;
