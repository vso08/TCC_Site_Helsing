import Logo from "../assets/logo.png";
import Nos from "../assets/nos.jpeg";

function Sobre() {
  return (
    <div className="bg-zinc-950">
      <div className="MainTxt flex justify-between container mx-auto p-5">
        <h1 className="RTDyans text-white text-5xl md:text-6xl self-center py-6 rounded-md">
          <span className="C text-8xl">S</span>obre
        </h1>
        <img alt="Logo" className="w-24 rounded-md" />
      </div>
      <div className=" bg-black text-white RTDyans p-5">
        <div className="container mx-auto lg:flex text-xl">
          <article>
            Helsing é um jogo desafiador que decidimos desenvolver para nosso
            Trabalho de Conlusão de Curso, possui um estilo 2d e uma
            jogabilidade mais frenética e compulsiva, o jogo é composto por
            quato cenários e cada um tem seu chefão local.
            <p>
              Comecando pela floresta, decidimos que combinaria com um mito
              clássico: O lobisomen, que pelo o que conhecemos, optaria por um
              combate de mais curto alcance, não é? mas não se engane
            </p>
            <p></p>
          </article>
          <img src={Logo} className="bg-zinc-900 rounded-md p-10"></img>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
