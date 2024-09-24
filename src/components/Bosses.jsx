import React, { useState } from "react";
import Lobo from "../assets/Lobi.png";
import Tocha from "../assets/Tocha.png";

function CardMonster({ imageSrc, altText, TextCard, DescCard, DescModal, AtqNormal }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex bg-neutral-900 p-3 rounded-lg text-white">
      <img
        src={imageSrc}
        alt={altText}
        className="p-2 w-32 rounded-md bg-zinc-950 shadow-2xl"
      />
      <div className="text-center p-2">
        <h1 className="bg-zinc-950 rounded-md RTDyans text-xl">{TextCard}</h1>
        <h2 className="pt-2 RTDyans text-md">{DescCard || "Sem descrição"}</h2>
        <div className="buttonVM">
          <button
            className="bg-red-700 mt-5 w-full text-md rounded-sm"
            onClick={() => setShowModal(true)}
          >
            Ver mais
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6   mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 bg-zinc-900 rounded-t border-b">
                      <h3 className="text-4xl font-semibold">{TextCard}</h3>
                    </div>
                    <div className="relative p-5 flex">
                      <img src={imageSrc} className="p-3 md:p-7 object-cover max-w-full"></img>
                      <p className="my-10 p-2 rounded-md bg-zinc-900 md:text-lg leading-relaxed">
                        {DescModal}
                      </p>
                    </div>
                    <div className="ataques flex">
                      <h1 className="text-2xl font-semibold p-5 ">
                        Habilidades
                      </h1>
                    </div>
                    <div className="grid grid-rows-3 md:grid-cols-3 px-5 gap-2">
                    <div className="AtqNormal bg-zinc-900 text-center rounded-sm">Ataque Normal: <br></br>{AtqNormal}</div>
                    <div className="AtqEspecial1 bg-zinc-900 text-center rounded-sm">Ataque Especial: </div>
                    <div className="AtqEspecial2 bg-zinc-900 text-center rounded-sm">a</div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b bg-zinc-900">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm modalButton"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Voltar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Bosses() {
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
            TextCard="Lobisomen"
            DescCard="Você se depará com o Lobisomen na floresta. Qual sua reação? correr? gritar? saiba que para Helsing, tudo isso é só mais um desafio"
            DescModal="O desafio de uma das figuras mitológicas mais famosas do
                        mundo se incia na floresta, o primeiro cenário de
                        Helsing. Após interagir com o vendedor enfrente o
                        Lobisomen!"
            AtqNormal="Ataque com garras"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Monstro Sem Descrição"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Monstro 3"
            DescCard="Descrição do Monstro 3"
          />
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobo"
            TextCard="Monstro 4"
            DescCard="Descrição do Monstro 4"
          />
        </section>
      </main>
    </div>
  );
}

export default Bosses;
