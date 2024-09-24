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
      <div className=" bg-black text-white RTDyans p-5 ">
        <div className="container mx-auto lg:flex text-xl">
          <article className="pt-3 p-7">
            Criado por um grupo apaixonado por videogames desde a infância,
            Helsing é um jogo que promete levar você para um universo épico de
            desafios e batalhas intensas contra chefões temíveis! Neste jogo de
            ação, você vai embarcar em uma jornada através de 5 mundos únicos,
            cada um dominado por um chefão que desafiará suas habilidades e
            estratégias.
            <p>
              Cada boss traz consigo uma história e um estilo de combate
              próprio, tornando cada batalha uma experiência completamente nova.
              E não pense que será fácil — apenas os mais corajosos e
              habilidosos conseguirão derrotar todos os chefões e restaurar a
              paz nos diferentes mundos.
            </p>
            <p>
            Se você gosta de desafios épicos, gráficos imersivos e batalhas emocionantes, Helsing é o jogo perfeito para você. Venha fazer parte dessa aventura criada por quem ama games tanto quanto você!
            </p>
          </article>
          <img src={Logo} className="bg-zinc-900 rounded-md p-10"></img>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
