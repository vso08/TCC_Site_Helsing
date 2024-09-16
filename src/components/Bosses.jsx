import img1 from "../assets/m1.jpeg";
import img2 from "../assets/m2.jpeg";
import img3 from "../assets/m3.jpeg";
import "../App.css";
import Lobo from "../assets/Lobi.png";
import Frank from "../assets/Frank.png";
import { React, useEffect, useRef } from "react";
import chapeu from "../assets/chapeu.png";
import { motion } from 'framer-motion'


 const images = [img1, img2, img3]


 function Cenario() {
  

 

  const Card = ({ title, description, imgSrc, imgAlt }) => (
    <div className="cardBoss flex p-5">
      <div className="BossFoto dir p-5 w-100 md:w-1/3 md:h-full w-full h-1/3 flex justify-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="bossImg border-4 outline-red-900 outline outline-2 rounded-full p-2"
        />
      </div>
      <div className="w-full">
        <h1 className="font-mono text-center text-lg bg-zinc-800 rounded-sm">
          {title}
        </h1>
        <h2 className="font-mono p-2 ">{description}</h2>
      </div>
    </div>
  );

  return (
    <div className=" bg-zinc-900">
      <div className="menuBanner">
        <div className="MainTxt grid grid-cols-2 container mx-auto">
          <h1 className="text-white RTDyans text-6xl px-10 py-5 font-bold">
            <span className="C text-9xl">C</span>ENÁRIOS
          </h1>
          <div className="flex justify-end">
            <img src={chapeu} className="px-10 py-5 w-48 items-end"></img>
          </div>
        </div>
      </div>
      <div className="page-container">
        <motion.div className="carousel">
          <motion.div className="inner"></motion.div>
            {images.map(image => (
              <motion.div className="item" key={image}>
                  <img src={image} alt="alt text"></img>
              </motion.div>
            ))}
        </motion.div>
      </div>
      <div className="MainTxt">
        <h1 className="text-white RTDyans text-sm md:text-6xl md:px-10 md:py-10 font-bold   ">
          <span className="C">C</span>HEFÕES
        </h1>
      </div>
      <div className="bg-zinc-900  rounded-md py-10">
        <div className="lg:grid grid-rows-2 lg:grid-cols-2 gap-0 text-white">
          <Card
            title="Lobisomen"
            description="O temido mito do fólclore americano agora se apresenta o desafiando para um duelo em seu temido mundo."
            imgSrc={Lobo}
            imgAlt="Lobisomen"
          />
          <Card
            title="Lobisomen"
            description="O temido mito do fólclore americano agora se apresenta o desafiando para um duelo em seu temido mundo."
            imgSrc={Lobo}
            imgAlt="Lobisomen"
          />
          <Card
            title="Lobisomen"
            description="O temido mito do fólclore americano agora se apresenta o desafiando para um duelo em seu temido mundo."
            imgSrc={Lobo}
            imgAlt="Lobisomen"
          />
          <Card
            title="Lobisomen"
            description="O temido mito do fólclore americano agora se apresenta o desafiando para um duelo em seu temido mundo."
            imgSrc={Lobo}
            imgAlt="Lobisomen"
          />
        </div>
      </div>
    </div>
  );
}

export default Cenario;