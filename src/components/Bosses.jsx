import React, { useState } from "react";
import PropTypes from "prop-types";
import Lobo from "../assets/Lobi.png";
import Tocha from "../assets/Tocha.png";
import Frank from "../assets/Frank.png";
import Lupa from "../assets/lupa.png";
import Vamp from "../assets/vamp.png";
import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import Claw from "../assets/Claw.png";
import Bite from "../assets/bite.png";
import Dragao from "../assets/dragao.png";
import VideoLobo from "../assets/videoLobo.mp4";
import m4 from "../assets/caverrna.png";
import cer from "../assets/cer.png";
import mao from "../assets/mao.png";
import mor from "../assets/morcego.png";
import rolo from "../assets/rolo.png";
import fogo from "../assets/fogo.png";
import gelo from "../assets/gelo.png";
 
function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;
 
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none RTDyans">
        <div className="relative w-full max-w-7xl mx-auto my-6 max-h-screen">
          <div className="relative flex flex-col w-full p-0 bg-zinc-800 rounded-lg shadow-lg outline-none focus:outline-none overflow-y-auto max-h-screen">
            <div className="flex items-start justify-between p-5 bg-zinc-950 rounded-t">
              <h3 className="text-4xl font-semibold">{content.title}</h3>
              <button
                className="text-white bg-red-900 rounded-sm p-2 "
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="flex flex-col md:flex-row p-5 items-center gap-4 w-full mt-5">
              <img
                src={content.imageSrc}
                alt={content.altText}
                className="object-contain w-full md:w-1/3 max-h-96 p-3 bg-zinc-900 rounded-md"
              />
              <p className="flex-1 p-20 text-center bg-zinc-900 rounded-md md:text-lg">
                {content.description}
              </p>
            </div>
            <div className="px-5 w-full mb-5 py-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-zinc-900 text-center rounded-sm p-2 flex flex-col">
                  <p>Ataque Normal:</p>
                  <img
                    src={content.normalAttack}
                    alt="Ataque Normal"
                    className="mx-auto"
                  />
                  <p className="border rounded-lg bg-zinc-950 mt-auto text-lg">{content.descAtaq}</p>
                </div>
                <div className="bg-zinc-900 text-center rounded-sm p-2 flex flex-col">
                  <p>Ataque Especial:</p>
                  <img
                    src={content.especialAttack}
                    alt="Ataque Especial"
                    className="mx-auto"
                  />
                  <p className="border rounded-lg bg-zinc-950 mt-auto text-lg">{content.descAtaqSp}</p>
                </div>
                <div className="bg-zinc-900 text-center rounded-sm p-2">
                  <p>Cenário:</p>
                  <img
                    src={content.scenario}
                    alt="Cenário"
                    className="mx-auto self-center mt-5 rounded-md"
                  />
                </div>
              </div>
              <div className="flex bg-zinc-900 mt-5 justify-center p-5">
                {content.video && (
                  <div className="relative w-full h-96 md:h-[500px] lg:h-[700px] bg-black rounded-lg overflow-hidden">
                    <video className="w-full h-full object-cover" controls>
                      <source src={content.video} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end p-4 bg-zinc-950 rounded-b">
              <button
                className="px-6 py-2 text-sm font-bold text-white uppercase bg-red-900 rounded-md"
                onClick={onClose}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    </>
  );
}
 
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    altText: PropTypes.string,
    description: PropTypes.string,
    normalAttack: PropTypes.string,
    scenario: PropTypes.string,
    especialAttack: PropTypes.string,
    video: PropTypes.string,
    descAtaq: PropTypes.string,
    descAtaqSp: PropTypes.string,
  }),
};
 
function CardMonster({
  imageSrc,
  altText,
  TextCard,
  DescCard,
  DescModal,
  AtqNormal,
  ImgCenario,
  AtqEspecial,
  Video,
  descAtaq,
  descAtaqSp
}) {
  const [showModal, setShowModal] = useState(false);
 
  const modalContent = {
    title: TextCard,
    imageSrc,
    altText,
    description: DescModal,
    normalAttack: AtqNormal,
    scenario: ImgCenario,
    especialAttack: AtqEspecial,
    video: Video,
    descAtaq:descAtaq,
    descAtaqSp:descAtaqSp
  };
 
  return (
    <div className="flex p-3 text-white bg-neutral-900 rounded-lg">
      <img
        src={imageSrc}
        alt={altText}
        className="max-h-32 max-w-22 p-2 bg-zinc-950 rounded-md shadow-2xl"
      />
      <div className="p-2 text-center">
        <h1 className="text-xl bg-zinc-950 rounded-md RTDyans">{TextCard}</h1>
        <h2 className="pt-5 text-md RTDyans transparent md:visible text-white">{DescCard || "Sem descrição"}</h2>
        <div className="flex justify-end p-1 buttonVM">
          <button
            className="mt-2 rounded-sm flex w-full bg-red-800 justify-center"
            onClick={() => setShowModal(true)}
          >
            <img src={Lupa} alt="Ver mais" className="w-10 p-1 rounded-md" />
          </button>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            content={modalContent}
          />
        </div>
      </div>
    </div>
  );
}
 
CardMonster.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  TextCard: PropTypes.string.isRequired,
  DescCard: PropTypes.string,
  DescModal: PropTypes.string,
  AtqNormal: PropTypes.string,
  ImgCenario: PropTypes.string,
  AtqEspecial: PropTypes.string,
  Video: PropTypes.string,
  descAtaq: PropTypes.string,
  descAtaqSp: PropTypes.string
};
 
function Bosses() {
  return (
    <div className="bg-zinc-950" id="bosses">
      <header className="container flex justify-between p-5 mx-auto MainTxt">
        <h1 className="self-center py-6 text-5xl text-white md:text-6xl RTDyans rounded-md">
          <span className="text-8xl C">C</span>hefões
        </h1>
        <img src={Tocha} alt="Logo Tocha" className="w-24 rounded-md" />
      </header>
      <main className="bg-black">
        <section className="container grid gap-20 p-10 mx-auto md:grid-rows-2 md:grid-cols-2">
          <CardMonster
            imageSrc={Lobo}
            altText="Imagem do Lobisomem"
            TextCard="Lobisomem"
            DescCard="Você se depará com o Lobisomem na floresta. Qual sua reação? Correr? Gritar? Saiba que para Helsing, tudo isso é só mais um desafio."
            DescModal="
O Lobisomem de Helsing é uma figura trágica, vítima de uma maldição ancestral que o transforma em uma fera sedenta de sangue sob a lua cheia. Originado do folclore europeu, ele simboliza a luta interna entre a humanidade e os instintos primitivos. Seu uivo, que ressoa pela floresta, é um eco de sofrimento, refletindo a dor de quem perdeu sua identidade. Ao enfrentá-lo, o herói não combate apenas um monstro, mas também suas próprias sombras, tentando entender e, quem sabe, libertar a alma atormentada que ainda persiste na besta."
            AtqNormal={Claw}
            AtqEspecial={Bite}
            ImgCenario={m1}
            Video={VideoLobo}
            descAtaq={"Ataque curta distância com garras"}
            descAtaqSp={"Mordida com grande raio"}
          />
          <CardMonster
            imageSrc={Frank}
            altText="Imagem do Frankenstein"
            TextCard="Frankenstein"
            DescCard="Mesmo sem poderes especiais, você se garante no mano-a-mano contra o Frankenstein? Teste e descubra seus limites."
            DescModal="Em uma pacífica cidade americana, o protagonista agora se vê diante de um dos maiores monstros já registrados na história da mitologia: o Frankenstein. Criado por um cientista obcecado pela ideia de ressuscitar a vida, o monstro de Frankenstein é uma figura de grande complexidade, não apenas uma criatura de carne e costura, mas também um ser que luta contra sua própria existência, rejeitado tanto por seu criador quanto pela sociedade. No confronto, o protagonista não só deve enfrentar a força bruta da criatura, mas também testar seus limites emocionais e psicológicos, confrontando questões de criação e identidade. Uma batalha contra os conceitos de humanidade e monstruosidade."
            AtqNormal={cer}
            AtqEspecial={mao}
            ImgCenario={m2}
            Video={VideoLobo}
            descAtaq={"Arremesso de um cérebro humano"}
            descAtaqSp={"Mãos surgem da terra para ataca-lo"}
          />
          <CardMonster
            imageSrc={Vamp}
            altText="Imagem do Drácula"
            TextCard="Drácula"
            DescCard="Este monstro não precisa de apresentações, o terceiro chefe de Helsing botará você em seu devido lugar."
            DescModal="O Drácula é uma das figuras mais icônicas da mitologia vampírica, um ser que transcende o tempo e o espaço. No mundo de Helsing, ele é o mestre das trevas, manipulando a escuridão e a morte para seu próprio prazer. Sua presença é uma ameaça constante, capaz de controlar criaturas noturnas e dominar a mente dos mais fracos. Enfrentar Drácula é mais do que apenas uma luta física; é um teste de resistência mental e espiritual, onde apenas os mais corajosos podem esperar sobreviver."
            AtqNormal={mor}
            AtqEspecial={rolo}
            ImgCenario={m3}
            Video={VideoLobo}
            descAtaq={"Transformação em morcegos"}
            descAtaqSp={"Cuidado com o Rolo-Compressor!"}
          />
          <CardMonster
            imageSrc={Dragao}
            altText="Imagem do Dragão"
            TextCard="Dragão"
            DescCard="O desafio final está à sua frente. O poderoso Dragão de Fogo testa seu valor como caçador de monstros. Está preparado para enfrentar a fúria das chamas?"
            DescModal="Nas profundezas de uma caverna vulcânica, o Dragão de Fogo aguarda, pronto para testar qualquer guerreiro destemido. Com seu poder avassalador e chamas implacáveis, ele representa o ápice da destruição. Mais do que um monstro, o dragão é o teste final de coragem, desafiando não só a força, mas a determinação do herói. Derrotá-lo é enfrentar o próprio inferno e conquistar a vitória definitiva."
            AtqNormal={fogo}
            AtqEspecial={gelo}
            ImgCenario={m4}
            Video={VideoLobo}
            descAtaq={"Um ataque à distância que deixa queimaduras"}
            descAtaqSp={"Esquive-se dos gelos do grande dragão elemental"}
          />
        </section>
      </main>
    </div>
  );
}
 
export default Bosses;
 