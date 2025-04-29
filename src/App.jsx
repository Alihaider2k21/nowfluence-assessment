import React from "react";
import banner from "./assets/banner.png";
import tiktok from "./assets/tiktok.png";
import insta from "./assets/insta.png";
import youtube from "./assets/youtube.png";
import arrow from "./assets/arrow-down.svg";

import "./App.css";
import Header from "./components/header";

function App() {

  return (
    <>
      <Header />
      <div className="items-center justify-self-center bg-[#EAF2FB] w-full justify-items-center px-4">
        <div className="flex flex-col gap-3 max-w-[1280px] sm:flex-row">
          <div className="flex flex-col gap-2 flex-1/2 py-5">
            <p className="font-bold">Brand Name</p>
            <h1 className="font-bold text-[35px]">Campaign Title Here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis labore accusantium veritatis aspernatur? Earum, aut,
              magni quas laboriosam ut recusandae autem doloremque sequi quod
              nemo delectus, qui officiis exercitationem. Quaerat, error!
              Suscipit ut incidunt impedit placeat explicabo! Repellendus quidem
              at velit qui quas modi impedit ullam quod ea, ratione consectetur.
              Suscipit ut incidunt impedit placeat explicabo! Repellendus quidem
              at velit qui quas modi impedit ullam quod ea, ratione consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis labore accusantium veritatis aspernatur? Earum, aut,
              magni quas laboriosam ut recusandae autem doloremque sequi quod
              nemo delectus, qui officiis exercitationem. Quaerat, error!
              Suscipit ut incidunt impedit placeat explicabo! Repellendus quidem
              at velit qui quas modi impedit ullam quod ea, ratione consectetur.
              Suscipit ut incidunt impedit placeat explicabo!
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold text-[14px]">
                Requested Start Date: MM/DD/YYYY
              </p>
              <button className="bg-white border border-[black] rounded-md py-1 px-5 text-[14px] flex gap-1 items-center">
                <img src={arrow} alt="download" className="w-[13px] " />
                View Campaign Brief
              </button>
            </div>
          </div>
          <div>
            <img alt="banner" src={banner} />
          </div>
        </div>
      </div>
      <div className="justify-self-center bg-white max-w-[1280px] w-full py-7 px-4">
        <h1 className="font-bold text-[35px] mb-3">Deliverables Requested</h1>
        <div className="justify-items-center">
          <div className="max-w-lg">
            <div className="flex gap-3 items-center">
              <img src={insta} alt="" className="w-[200px]" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                dolore soluta?
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={tiktok} alt="" className="w-[200px]" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                dolore soluta?
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={youtube} alt="" className="w-[200px]" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                dolore soluta?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] justify-self-center w-full py-7 flex gap-3 flex-col px-4">
        <h1 className="font-bold text-[35px]">Additional Information</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          excepturi laudantium blanditiis suscipit nihil? Cumque, ducimus illo
          molestiae sunt dolore, inventore magni enim voluptatum sapiente
          mollitia ipsa? Velit cupiditate optio obcaecati repellendus facere
          quas labore commodi ad non, distinctio esse iste blanditiis quaerat
          provident possimus, at, fuga aliquam doloribus corrupti debitis
          laudantium. Magnam, soluta consectetur dolores quam enim deserunt
          voluptates quos
        </p>
        <div className="max-w-lg justify-self-center flex flex-col gap-4 self-center items-center mt-5">
          <h2 className="text-[28px] font-bold">
            Interested in this Campaign?
          </h2>
          <p className="font-bold">
            Apply here to participate in the campaign:
          </p>
          <button className="bg-[#62CBDE] rounded-4xl py-3 px-14 text-white w-fit">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
