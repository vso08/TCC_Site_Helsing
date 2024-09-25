import Menu from "../assets/menu.png";
import Nos from "../assets/nos.jpeg";
import Exc from "../assets/exc.png"

function Sobre() {
  return (
    <div className="bg-zinc-950" id="sobre">
      <div className="MainTxt flex justify-between container mx-auto p-5">
        <h1 className="RTDyans text-white text-5xl md:text-6xl self-center py-6 rounded-md">
          <span className="C text-8xl">S</span>obre
        </h1>
        <img alt="Logo" src={Exc} className=" rounded-md w-40 h-32 place-self-end p-2"/>
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
          <img src={Menu} className="bg-zinc-900 rounded-lg p-5"></img>
        </div>
      </div>
      <div className="w-10 h-10">
      </div>
    </div>
  );
}

export default Sobre;
