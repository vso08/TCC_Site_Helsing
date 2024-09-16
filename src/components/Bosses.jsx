import { useState } from "react";
import { motion } from "framer-motion";
import Lobo from "../assets/Lobi.png";
import Tocha from "../assets/Tocha.png"

function CardMonster({ imageSrc, altText, TextCard, borderColor }) {
  return (
    <div
      className="flex bg-neutral-900 p-3 rounded-lg text-white"
    >
      <img src={imageSrc} alt={altText} className="p-2 w-32 rounded-md bg-zinc-950 shadow-2xl"/>
      <h1>{TextCard}</h1>
    </div>
  );
}

function Cenario() {
  return (
    <div className="bg-zinc-950">
      <header className="MainTxt flex justify-between container mx-auto p-5">
        <h1 className="RTDyans text-white text-5xl md:text-6xl self-center py-6 rounded-md">
          <span className="C text-8xl">C</span>hefões
        </h1>
        <img src={Tocha} alt="Logo" className="w-24 rounded-md" />
      </header>

      <main className="bg-black">
        <section className="container mx-auto grid md:grid-rows-2 md:grid-cols-2 p-10 gap-20">
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Texto"
            borderColor="border border-red-900"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Texto"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Texto"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Texto"
          />
        </section>
      </main>
    </div>
  );
}

export default Cenario;
